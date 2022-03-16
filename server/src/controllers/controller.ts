import feedback from '../model/feedback'

export const fetchFeedback = (req, res) => {
  res.status(200).json({
    message: feedback,
  })
  console.log('Good job boy')
}
