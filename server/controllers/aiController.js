import { GoogleGenAI } from "@google/genai";

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const isRetryableGeminiError = (error) => {
  const errorText = JSON.stringify(error);

  return (
    errorText.includes("503") ||
    errorText.includes("UNAVAILABLE") ||
    errorText.includes("high demand") ||
    errorText.includes("overloaded")
  );
};

const generateContentWithRetry = async (ai, prompt) => {
  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt,
      });

      return response;
    } catch (error) {
      const shouldRetry = isRetryableGeminiError(error);

      if (!shouldRetry || attempt === maxRetries) {
        throw error;
      }

      await wait(2000 * attempt);
    }
  }
};

export const generateInterviewFeedback = async (req, res) => {
  try {
    const { role, answers } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Gemini API key is missing. Add GEMINI_API_KEY in server/.env",
      });
    }

    if (!role || !answers || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Role and answers are required",
      });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are an interview evaluator.

Role: ${role}

Evaluate the following interview answers.

Return ONLY valid JSON in this exact format:
{
  "answerFeedback": [
    {
      "question": "question text",
      "answer": "answer text",
      "score": number between 0 and 100,
      "feedback": "short feedback",
      "suggestion": "short improvement suggestion"
    }
  ],
  "overallScore": number between 0 and 100
}

Rules:
- If answer is empty, score should be 0.
- If answer is very short, score should be low.
- Feedback should match the question.
- Do not give generic suggestions like "add one project example" unless it suits the question.
- Feedback should be simple and student-friendly.
- Do not add markdown.
- Do not add explanation outside JSON.

Answers:
${JSON.stringify(answers, null, 2)}
`;

    const response = await generateContentWithRetry(ai, prompt);

    const text = response.text;
    const cleanedText = text.replace(/```json|```/g, "").trim();
    const parsedData = JSON.parse(cleanedText);

    return res.status(200).json({
      success: true,
      data: parsedData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate AI feedback",
      error: error.message,
    });
  }
};