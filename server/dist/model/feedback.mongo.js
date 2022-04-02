"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const feedbackSchema = new mongoose_1.default.Schema({
    rating: { type: Number, required: true },
    text: { type: String, required: true },
});
const feedbackDatabase = mongoose_1.default.model("feedback", feedbackSchema);
exports.default = feedbackDatabase;
