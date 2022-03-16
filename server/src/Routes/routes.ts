import { Router } from 'express'
import {
  postFeedback,
  fetchFeedback,
  updateFeedback,
  deleteFeedback,
} from '../controllers/controller'

const router = Router()

router.post('/', postFeedback)

router.get('/', fetchFeedback)

router.put('/:id', updateFeedback)

router.delete('/:id', deleteFeedback)

export default router
