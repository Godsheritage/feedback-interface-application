"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const router = (0, express_1.Router)();
router.post('/', controller_1.postFeedback);
router.get('/', controller_1.fetchFeedback);
router.put('/:id', controller_1.updateFeedback);
router.delete('/:id', controller_1.deleteFeedback);
exports.default = router;