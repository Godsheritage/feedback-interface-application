"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedback_controller_1 = require("./feedback.controller");
const feedbackRouter = (0, express_1.Router)();
//feedback router endpoints
feedbackRouter.post('/', feedback_controller_1.httpPostFeedback);
feedbackRouter.get('/', feedback_controller_1.httpFetchFeedback);
feedbackRouter.put('/:id', feedback_controller_1.httpUpdateFeedback);
feedbackRouter.delete('/:id', feedback_controller_1.httpDeleteFeedback);
exports.default = feedbackRouter;
