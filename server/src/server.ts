import http from "http";
import app from "./app";
import mongoose from "mongoose";

// express API ports
const PORT = process.env.PORT || 5000;




// mongo Url from the feedback cluster
const MONGO_URL = "mongodb+srv://feedback-api:Heritage4lyf@feedbackcluster.pweoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const server = http.createServer(app);

// to alert us when mongoose has connected to mongo db
mongoose.connection.once("open", () => {
  console.log("MongoDB Connection is ready");
});

// mongoose error handler
mongoose.connection.on("eror", (err) => {
  console.error(err);
});

// to start the server and connect to mongoDB
const startServer = async () => {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`);
  });
};

startServer();
