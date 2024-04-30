import express from "express";
import { config } from "dotenv";

config({
  path: "./config/config.env",
});
const app = express();

import course from "./routers/courseRoutes.js";
import user from "./routers/userRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);

export default app;
