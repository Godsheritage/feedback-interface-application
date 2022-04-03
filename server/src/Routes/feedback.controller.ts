import { RequestHandler } from 'express'
import feedback, { foundItem } from '../model/feedback.model'
import { getAllFeedback } from '../model/feedback.model'
import { addNewFeedback } from '../model/feedback.model'
import { findItem } from '../model/feedback.model'

//TODO change all the route handler names to httpNames

// to add a feedback to the feedback database
export const postFeedback: RequestHandler = async (req, res) => {
  const newFeedback = req.body
  await addNewFeedback(newFeedback)
  res.status(201).json(newFeedback)
}

// to fetch all the feedbacks from feedback database
export const fetchFeedback: RequestHandler = async (req, res) => {
  res.status(200).json(await getAllFeedback())
}

// to update a feedback from your feedback database 
export const updateFeedback: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const updItem = { rating: +req.body.rating, text: req.body.text };
  const findAndUpdate = await findItem(id, updItem);
  const fetchUpdatedItem = await foundItem(id)
  if (findAndUpdate.matchedCount === 0 ) {
    return res.status(400).json({
      error: `item with id ${id} is not found`,
    });
  }

  return res.status(200).json(fetchUpdatedItem);
};

// to update a feedback from the database
//TODO setup the mongo database to delete a databse 
export const deleteFeedback: RequestHandler = (req, res) => {
  const id = req.params.id 
  const found = feedback.findIndex((items) => items.id === +id)

  if (found < 0) {
    return res.status(400).json({
      error: `item with id ${id} is not found`,
    })
  }

  feedback.splice(found, 1)

  res.status(200).json({
    message: feedback.filter((items) => items.id !== +id),
  })
}
