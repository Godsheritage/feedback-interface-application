import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  //to fetch all feedback items from the server
  const fetchFeedback = async () => {
    const response = await axios.get('http://localhost:5000/feedback')
    setFeedback(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  const addFeedback = async (newFeedback) => {
    const response = await axios.post('http://localhost:5000/feedback', newFeedback)

    const data = response.data.newItem

    setFeedback([data, ...feedback])
  }



  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // await fetch(`/feedback/${id}`, { method: 'DELETE' })

      await axios.delete(`http://localhost:5000/feedback/${id}`)

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const updateFeedback = async (id, updItem) => {
    const response = await axios.put(`http://localhost:5000/feedback/${id}`, updItem)

    const data = response.data.message

    // NOTE: no need to spread data and item
    setFeedback(feedback.map((item) => (item.id === id ? data : item)))

    // FIX: this fixes being able to add a feedback after editing
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
