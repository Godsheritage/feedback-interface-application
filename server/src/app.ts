import express from "express";
import feedbackRouter from "./Routes/feedback.routes";
import path from "path";
import cors from "cors";

// setup the express application
const app = express();

// to enable the Cross-Origin Resource Sharing
app.use(cors());

// to setup th e express aplication
app.use(express.json());

// to setup the feedback Route
app.use("/feedback", feedbackRouter);

//to serve the front end with the back end
app.use(express.static(path.join(__dirname, "..", "public ")));

// to get the index.html page
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
