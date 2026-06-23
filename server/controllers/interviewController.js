import Interview from "../models/Interview.js";

export const createInterview = async (req, res) => {
  try {
    const {
      role,
      totalQuestions,
      answeredCount,
      unansweredCount,
      completionPercentage,
      overallScore,
      answerFeedback,
    } = req.body;

    const interview = await Interview.create({
      role,
      totalQuestions,
      answeredCount,
      unansweredCount,
      completionPercentage,
      overallScore,
      answerFeedback,
    });

    res.status(201).json({
      success: true,
      message: "Interview saved successfully",
      data: interview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save interview",
      error: error.message,
    });
  }
};

export const getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: interviews.length,
      data: interviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch interviews",
      error: error.message,
    });
  }
};

export const deleteInterviews = async (req, res) => {
  try {
    await Interview.deleteMany();

    res.status(200).json({
      success: true,
      message: "Interview history cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to clear interview history",
      error: error.message,
    });
  }
};