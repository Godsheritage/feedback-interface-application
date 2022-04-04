"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeleteFeedback = exports.httpUpdateFeedback = exports.httpFetchFeedback = exports.httpPostFeedback = void 0;
const feedback_model_1 = __importStar(require("../model/feedback.model"));
const feedback_model_2 = require("../model/feedback.model");
const feedback_model_3 = require("../model/feedback.model");
const feedback_model_4 = require("../model/feedback.model");
// to add a feedback to the feedback database
const httpPostFeedback = async (req, res) => {
    const newFeedback = req.body;
    await (0, feedback_model_3.addNewFeedback)(newFeedback);
    res.status(201).json(newFeedback);
};
exports.httpPostFeedback = httpPostFeedback;
// to fetch all the feedbacks from feedback database
const httpFetchFeedback = async (req, res) => {
    res.status(200).json(await (0, feedback_model_2.getAllFeedback)());
};
exports.httpFetchFeedback = httpFetchFeedback;
// to update a feedback from your feedback database 
const httpUpdateFeedback = async (req, res) => {
    const id = +req.params.id;
    const updItem = { rating: +req.body.rating, text: req.body.text };
    const findAndUpdate = await (0, feedback_model_4.findItem)(id, updItem);
    const fetchUpdatedItem = await (0, feedback_model_1.foundItem)(id);
    if (findAndUpdate.matchedCount === 0) {
        return res.status(400).json({
            error: `item with id ${id} is not found`,
        });
    }
    return res.status(200).json(fetchUpdatedItem);
};
exports.httpUpdateFeedback = httpUpdateFeedback;
// to delete a feedback from your feedback database
//TODO setup the mongo database to delete a databse 
const httpDeleteFeedback = (req, res) => {
    const id = req.params.id;
    const found = feedback_model_1.default.findIndex((items) => items.id === +id);
    if (found < 0) {
        return res.status(400).json({
            error: `item with id ${id} is not found`,
        });
    }
    feedback_model_1.default.splice(found, 1);
    res.status(200).json({
        message: feedback_model_1.default.filter((items) => items.id !== +id),
    });
};
exports.httpDeleteFeedback = httpDeleteFeedback;
