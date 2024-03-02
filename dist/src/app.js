"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import routes from './routes/routes'
const app = (0, express_1.default)();
const port = 3000;
// app.use('/v1/qp', routes)
app.get('/', (req, res) => {
    res.send("hello woirld");
});
app.listen(port, () => {
    console.log(`Hello NILANK NIKHIL app is listening at http://localhost:${port}`);
});
