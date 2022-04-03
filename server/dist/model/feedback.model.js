"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foundItem = exports.findItem = exports.addNewFeedback = exports.getAllFeedback = void 0;
const feedback_mongo_1 = __importDefault(require("./feedback.mongo"));
const feedback = [
    {
        id: 0,
        rating: 10,
        text: "This is the first feedback item coming from the backend API",
    },
    {
        id: 1,
        rating: 8,
        text: "This is the second feedback item coming from the backend API",
    },
    {
        id: 2,
        rating: 4,
        text: "This is the third feedback item coming from the backend API",
    },
];
// to fetch all the feedbacks from feedback database
const getAllFeedback = async () => {
    return await feedback_mongo_1.default.find({}, { __v: 0, _id: 0 });
};
exports.getAllFeedback = getAllFeedback;
// to add a new feedback to the database
const addNewFeedback = async (newFeedback) => {
    await feedback_mongo_1.default.findOneAndUpdate({ rating: newFeedback.rating }, newFeedback, { upsert: true });
};
exports.addNewFeedback = addNewFeedback;
// to find and update a feedback from your feedback database 
const findItem = async (ID, updItem) => {
    const { rating, text } = updItem;
    return await feedback_mongo_1.default.updateOne({
        id: ID
    }, { rating, text });
};
exports.findItem = findItem;
// to find documents in the datasbase 
const foundItem = async (ID) => {
    return await feedback_mongo_1.default.findOne({
        id: ID
    });
};
exports.foundItem = foundItem;
exports.default = feedback;
