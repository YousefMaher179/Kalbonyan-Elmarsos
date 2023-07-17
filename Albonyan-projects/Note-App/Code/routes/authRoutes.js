import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

import {
  signUp,
  login,
  updateUser,
  getCurrentUser,
  logout,
} from "../controllers/authController.js";
import authenticateUser from "../middlewares/auth.js";

router.route("/signUp").post(apiLimiter, signUp);
router.route("/login").post(apiLimiter, login);
router.route("/logout").get(logout);

router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
