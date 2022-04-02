import { feedbackTypes, mongoTypes } from "../Types/types";
import feedbackDatabase from "./feedback.mongo";

const feedback: feedbackTypes[] = [
  {
    id: 0,
    rating: 10,
    text: "This is the first feedback item coming from the backend API",
  },
  {
    id: 1,
    rating: 8,
    text: "This is the second feedback item coming from the backend API",
  },
  {
    id: 2,
    rating: 4,
    text: "This is the third feedback item coming from the backend API",
  },
];

export const getAllFeedback = async () => {
  return await feedbackDatabase.find({}, { __v: 0, _id: 0 });
};

export const addNewFeedback = async (newFeedback: feedbackTypes) => {
  await feedbackDatabase.findOneAndUpdate(
    { rating: newFeedback.rating },
    newFeedback,
    { upsert: true }
  );
};



export default feedback;
