"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedback_routes_1 = __importDefault(require("./Routes/feedback.routes"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// setup the express application
const app = (0, express_1.default)();
// to enable the Cross-Origin Resource Sharing
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
// to setup th e express aplication
app.use(express_1.default.json());
// to setup the feedback Route
app.use("/feedback", feedback_routes_1.default);
//serve static assets if in production
// if (process.env.NODE_ENV === "production") {
// set static folder
//to serve the front end with the back end
app.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "public ")));
// to get the index.html page
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "..", "public ", "index.html"));
});
// }
exports.default = app;
