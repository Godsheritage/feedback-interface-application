"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findItem = exports.addNewFeedback = exports.getAllFeedback = void 0;
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
const getAllFeedback = async () => {
    return await feedback_mongo_1.default.find({}, { __v: 0, _id: 0 });
};
exports.getAllFeedback = getAllFeedback;
const addNewFeedback = async (newFeedback) => {
    await feedback_mongo_1.default.findOneAndUpdate({ rating: newFeedback.rating }, newFeedback, { upsert: true });
};
exports.addNewFeedback = addNewFeedback;
const findItem = async (ID) => {
    return await feedback_mongo_1.default.findOne({
        id: ID
    });
    // console.log( await findItem(1))
};
exports.findItem = findItem;
exports.default = feedback;
