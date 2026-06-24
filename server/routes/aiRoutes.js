import express from "express";
import { generateInterviewFeedback } from "../controllers/aiController.js";

const router = express.Router();

router.post("/feedback", generateInterviewFeedback);

export default router;