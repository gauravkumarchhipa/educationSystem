import express from "express";
import { getUserDetails } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/user").get(getUserDetails);

export default router;
