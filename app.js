import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";

config({
  path: "./config/config.env",
});
const app = express();

import course from "./routers/courseRoutes.js";
import user from "./routers/userRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);

export default app;
app.get("/", (req, res) => {
  res.send(
    `<h1>Server is working. click <a href=${
      process.env.NODE_ENV === "development"
        ? process.env.FRONTEND_URL_LOCAL
        : process.env.FRONTEND_URL
    }>here</a> to visit frontend.</h1>`
  );
});

app.use(ErrorMiddleware);
