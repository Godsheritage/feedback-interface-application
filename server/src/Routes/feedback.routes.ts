import { Router } from 'express'
import {
  httpPostFeedback,
  httpFetchFeedback,
  httpUpdateFeedback,
  httpDeleteFeedback,
} from './feedback.controller'

const feedbackRouter = Router()

feedbackRouter.post('/', httpPostFeedback)

feedbackRouter.get('/', httpFetchFeedback)

feedbackRouter.put('/:id', httpUpdateFeedback)

feedbackRouter.delete('/:id', httpDeleteFeedback)

export default feedbackRouter
