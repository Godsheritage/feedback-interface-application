"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeleteFeedback = exports.httpUpdateFeedback = exports.httpFetchFeedback = exports.httpPostFeedback = void 0;
const feedback_model_1 = require("../model/feedback.model");
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
const httpDeleteFeedback = async (req, res) => {
    const ID = +req.params.id;
    const fetchUpdatedItem = await (0, feedback_model_1.foundItem)(ID);
    if (!fetchUpdatedItem) {
        return res.status(400).json({
            error: `item with id ${ID} is not found`,
        });
    }
    await (0, feedback_model_1.deleteItem)(ID);
    res.status(200).json({
        ok: true
    });
};
exports.httpDeleteFeedback = httpDeleteFeedback;
