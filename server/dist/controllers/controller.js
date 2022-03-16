"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFeedback = void 0;
const feedback_1 = __importDefault(require("../model/feedback"));
const fetchFeedback = (req, res) => {
    res.status(200).json({
        message: feedback_1.default,
    });
    console.log('Good job boy');
};
exports.fetchFeedback = fetchFeedback;
