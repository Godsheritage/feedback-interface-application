import { RequestHandler } from 'express'
import feedback from '../model/feedback.model'
import { feedbackTypes } from '../Types/types'
import { getAllFeedback } from '../model/feedback.model'

export const postFeedback: RequestHandler = (req, res) => {
  const { rating, text } = req.body

  const newFeedback: feedbackTypes = {
    id: feedback.length,
    rating,
    text,
  }
  feedback.push(newFeedback)
  res.status(201).json({
    newItem: newFeedback,
  })
}

export const fetchFeedback: RequestHandler = async (req, res) => {
  res.status(200).json(await getAllFeedback())
}

export const updateFeedback: RequestHandler = (req, res) => {
  const id = req.params.id
  const found = feedback.findIndex((items) => items.id === +id)
  if (found < 0) {
    return res.status(400).json({
      error: `item with id ${id} is not found`,
    })
  }

  feedback[found].rating = +req.body.rating
  feedback[found].text = req.body.text

  res.status(200).json({
    message: feedback[found]
  })
}

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
