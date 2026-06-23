import express from "express";
import {
  createInterview,
  getInterviews,
  deleteInterviews,
} from "../controllers/interviewController.js";

const router = express.Router();

router.post("/", createInterview);
router.get("/", getInterviews);
router.delete("/", deleteInterviews);

export default router;