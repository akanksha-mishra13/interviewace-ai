import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
      default: 0,
    },
    feedback: {
      type: String,
      default: "",
    },
    suggestion: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const interviewSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    answeredCount: {
      type: Number,
      required: true,
    },
    unansweredCount: {
      type: Number,
      required: true,
    },
    completionPercentage: {
      type: Number,
      required: true,
    },
    overallScore: {
      type: Number,
      required: true,
    },
    answerFeedback: {
      type: [feedbackSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;