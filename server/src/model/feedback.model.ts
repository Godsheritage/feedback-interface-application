import { feedbackTypes, mongoTypes } from "../Types/types";
import feedbackDatabase from "./feedback.mongo";

//TODO delete this feedback array after mongoose delete fncn
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

// to fetch all the feedbacks from feedback database
export const getAllFeedback = async () => {
  return await feedbackDatabase.find({}, { __v: 0, _id: 0 });
};

// to add a new feedback to the database
export const addNewFeedback = async (newFeedback: feedbackTypes) => {
  await feedbackDatabase.findOneAndUpdate(
    { rating: newFeedback.rating },
    newFeedback,
    { upsert: true }
  );
};

// to find and update a feedback from your feedback database 
export const findItem = async (ID: number, updItem:any) => {
  const {rating, text} = updItem
  return await feedbackDatabase.updateOne({
    id : ID
  },
  {rating, text}
  )
} 

// to find documents in the datasbase 
export const foundItem = async (ID: number) => {
  return await feedbackDatabase.findOne({
    id : ID
  })
} 

// to delete items in a database
export const deleteItem = async (ID : any) => {
  await feedbackDatabase.deleteOne(
    {id:ID}
  ) 
}


export default feedback;
