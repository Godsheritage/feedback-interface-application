import mongoose, { model, Schema, Model, Document } from "mongoose";

// feedback schema
const feedbackSchema: Schema = new mongoose.Schema({
  id: { type: Number },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});

const feedbackDatabase = mongoose.model("feedback", feedbackSchema);

export default feedbackDatabase;
