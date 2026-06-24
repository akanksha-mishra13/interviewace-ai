import { GoogleGenAI } from "@google/genai";

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
- Feedback should be simple and student-friendly.
- Do not add markdown.
- Do not add explanation outside JSON.

Answers:
${JSON.stringify(answers, null, 2)}
`;

    const response = await ai.models.generateContent({
      model:"gemini-2.5-flash-lite",
      contents: prompt,
    });

    const text = response.text;
    const cleanedText = text.replace(/```json|```/g, "").trim();
    const parsedData = JSON.parse(cleanedText);

    res.status(200).json({
      success: true,
      data: parsedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to generate AI feedback",
      error: error.message,
    });
  }
};