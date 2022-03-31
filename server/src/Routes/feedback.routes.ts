import { Router } from 'express'
import {
  postFeedback,
  fetchFeedback,
  updateFeedback,
  deleteFeedback,
} from './feedback.controller'

const feedbackRouter = Router()

feedbackRouter.post('/', postFeedback)

feedbackRouter.get('/', fetchFeedback)

feedbackRouter.put('/:id', updateFeedback)

feedbackRouter.delete('/:id', deleteFeedback)

export default feedbackRouter
