"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.createMovie = exports.findMovieById = exports.findAllMovies = exports.countAllMovies = void 0;
const movieModel_1 = __importDefault(require("../models/movieModel"));
const countAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield movieModel_1.default.count({}));
});
exports.countAllMovies = countAllMovies;
//bugdiin avah
const findAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = '10', skip = '0' } = req.query;
    const result = yield movieModel_1.default.find()
        .limit(Number(limit))
        .skip(Number(skip));
    res.json(result);
});
exports.findAllMovies = findAllMovies;
//neg shirhegiig avah
const findMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield movieModel_1.default.findById(_id);
    res.json(result);
});
exports.findMovieById = findMovieById;
//shineer nemeh
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield movieModel_1.default.create(req.body);
    res.json(newUser);
});
exports.createMovie = createMovie;
//update hiih 
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const body = req.body;
    const result = yield movieModel_1.default.findByIdAndUpdate(_id, body);
    res.json(result);
});
exports.updateMovie = updateMovie;
//ustgah
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield movieModel_1.default.findByIdAndDelete(_id);
    res.json(result);
});
exports.deleteMovie = deleteMovie;
