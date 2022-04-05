import { RequestHandler } from 'express'
import  { deleteItem, foundItem } from '../model/feedback.model'
import { getAllFeedback } from '../model/feedback.model'
import { addNewFeedback } from '../model/feedback.model'
import { findItem } from '../model/feedback.model'


// to add a feedback to the feedback database
export const httpPostFeedback: RequestHandler = async (req, res) => {
  const newFeedback = req.body
  await addNewFeedback(newFeedback)
  res.status(201).json(newFeedback)
}

// to fetch all the feedbacks from feedback database
export const httpFetchFeedback: RequestHandler = async (req, res) => {
  res.status(200).json(await getAllFeedback())
}

// to update a feedback from your feedback database 
export const httpUpdateFeedback: RequestHandler = async (req, res) => {
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

// to delete a feedback from your feedback database
export const httpDeleteFeedback: RequestHandler = async (req, res) => {
  const ID = +req.params.id 

  const fetchUpdatedItem = await foundItem(ID)

   if (!fetchUpdatedItem) {
    return res.status(400).json({
      error: `item with id ${ID} is not found`,
    });
  }

  await deleteItem(ID)
  res.status(200).json({
    ok : true
  })
  
}
