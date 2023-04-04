"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter_1 = __importDefault(require("./routes/usersRouter"));
const cors_1 = __importDefault(require("cors"));
const moviesRouter_tsx_1 = __importDefault(require("./routes/moviesRouter.tsx"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json('Hello world');
});
app.use('/api/users', usersRouter_1.default);
app.use('/api/movies', moviesRouter_tsx_1.default);
app.get('/hello', (req, res) => {
    res.json('Hello world! again');
});
exports.default = app;
