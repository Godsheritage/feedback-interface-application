import mongoose, { model, Schema, Model, Document } from "mongoose";

const feedbackSchema: Schema = new mongoose.Schema({
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});

const feedbackDatabase = mongoose.model("feedback", feedbackSchema);

export default feedbackDatabase;
