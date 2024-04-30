import express from "express";
import {
  getUserDetails,
  login,
  logout,
  registration,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/registration").post(registration);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/user").get(getUserDetails);

export default router;
