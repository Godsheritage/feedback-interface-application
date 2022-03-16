interface feedbackTypes {
    id:number;
    rating:number;
    text:string
}


const feedback : feedbackTypes[] = [
  {
    id: 1,
    rating: 10,
    text: 'This is feedback item 1 coming from the backend',
  },
  {
    id: 2,
    rating: 8,
    text: 'This is feedback item 2 coming from the backend',
  },
]

export default feedback
