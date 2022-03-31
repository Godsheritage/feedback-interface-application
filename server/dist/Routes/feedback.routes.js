"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedback_controller_1 = require("./feedback.controller");
const feedbackRouter = (0, express_1.Router)();
feedbackRouter.post('/', feedback_controller_1.postFeedback);
feedbackRouter.get('/', feedback_controller_1.fetchFeedback);
feedbackRouter.put('/:id', feedback_controller_1.updateFeedback);
feedbackRouter.delete('/:id', feedback_controller_1.deleteFeedback);
exports.default = feedbackRouter;