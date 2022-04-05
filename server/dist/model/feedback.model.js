"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.foundItem = exports.findItem = exports.addNewFeedback = exports.getAllFeedback = void 0;
const feedback_mongo_1 = __importDefault(require("./feedback.mongo"));
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
// to delete items in a database
const deleteItem = async (ID) => {
    await feedback_mongo_1.default.deleteOne({ id: ID });
};
exports.deleteItem = deleteItem;
// export default feedback;
