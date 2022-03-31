import express from 'express'
import feedbackRouter from './Routes/feedback.routes'
import path from 'path';
import cors from 'cors'
const app = express();

app.use(cors());

app.use(express.json());

app.use('/feedback', feedbackRouter);

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req , res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app