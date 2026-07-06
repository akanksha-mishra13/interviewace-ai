import express from "express";
import { registerUser, loginUser, googleLogin } from "../controllers/authcontroller.js";

// 1. CREATE THE ROUTER FIRST
// We must build the shelf before we can put books on it!
const router = express.Router();

// 2. ATTACH THE ROUTES
// Now that 'router' exists, we can safely attach our endpoints.
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", googleLogin);

export default router;