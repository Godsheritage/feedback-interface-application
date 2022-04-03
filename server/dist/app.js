"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedback_routes_1 = __importDefault(require("./Routes/feedback.routes"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
// setup the express application
const app = (0, express_1.default)();
// to enable the Cross-Origin Resource Sharing
app.use((0, cors_1.default)());
// to setup th e express aplication
app.use(express_1.default.json());
// to setup the feedback Route
app.use("/feedback", feedback_routes_1.default);
//to serve the front end with the back end
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public ")));
// to get the index.html page
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public ", "index.html"));
});
exports.default = app;
