"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeedback = exports.updateFeedback = exports.fetchFeedback = exports.postFeedback = void 0;
const feedback_model_1 = __importDefault(require("../model/feedback.model"));
const feedback_model_2 = require("../model/feedback.model");
const postFeedback = (req, res) => {
    const { rating, text } = req.body;
    const newFeedback = {
        id: feedback_model_1.default.length,
        rating,
        text,
    };
    feedback_model_1.default.push(newFeedback);
    res.status(201).json({
        newItem: newFeedback,
    });
};
exports.postFeedback = postFeedback;
const fetchFeedback = async (req, res) => {
    res.status(200).json(await (0, feedback_model_2.getAllFeedback)());
};
exports.fetchFeedback = fetchFeedback;
const updateFeedback = (req, res) => {
    const id = req.params.id;
    const found = feedback_model_1.default.findIndex((items) => items.id === +id);
    if (found < 0) {
        return res.status(400).json({
            error: `item with id ${id} is not found`,
        });
    }
    feedback_model_1.default[found].rating = +req.body.rating;
    feedback_model_1.default[found].text = req.body.text;
    res.status(200).json({
        message: feedback_model_1.default[found]
    });
};
exports.updateFeedback = updateFeedback;
const deleteFeedback = (req, res) => {
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
exports.deleteFeedback = deleteFeedback;
