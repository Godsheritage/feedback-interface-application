import http from 'http'
import app from './app';
import mongoose from 'mongoose'

const PORT = process.env.PORT || 5000;

const MONGO_URL = 'mongodb+srv://feedback-api:Heritage4lyf@feedbackcluster.pweoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const server = http.createServer(app)

mongoose.connection.once('open', () => {
  console.log('MongoDB Connection is ready')
})

mongoose.connection.on('eror', (err) => {
  console.error(err)
})

mongoose.connect(MONGO_URL)

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`)
});

