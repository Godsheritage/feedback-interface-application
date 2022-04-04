"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
// express API ports
const PORT = process.env.PORT || 5000;
// mongo Url from the feedback cluster
const MONGO_URL = "mongodb+srv://feedback-api:Heritage4lyf@feedbackcluster.pweoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const server = http_1.default.createServer(app_1.default);
// to alert us when mongoose has connected to mongo db
mongoose_1.default.connection.once("open", () => {
    console.log("MongoDB Connection is ready");
});
// mongoose error handler
mongoose_1.default.connection.on("eror", (err) => {
    console.error(err);
});
// to start the server and connect to mongoDB
const startServer = async () => {
    await mongoose_1.default.connect(MONGO_URL);
    server.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}...`);
    });
};
startServer();
