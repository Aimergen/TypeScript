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
exports.deleteUser = exports.updateUser = exports.createUser = exports.findUserById = exports.findAllUsers = exports.countAllUsers = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const countAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield userModel_1.default.count({}));
});
exports.countAllUsers = countAllUsers;
//bugdiin avah
const findAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = '10', skip = '0' } = req.query;
    const result = yield userModel_1.default.find()
        .limit(Number(limit))
        .skip(Number(skip));
    res.json(result);
});
exports.findAllUsers = findAllUsers;
//neg shirhegiig avah
const findUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield userModel_1.default.findById(_id);
    res.json(result);
});
exports.findUserById = findUserById;
//shineer nemeh
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield userModel_1.default.create(req.body);
    res.json(newUser);
});
exports.createUser = createUser;
//update hiih 
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const body = req.body;
    const result = yield userModel_1.default.findByIdAndUpdate(_id, body);
    res.json(result);
});
exports.updateUser = updateUser;
//ustgah
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield userModel_1.default.findByIdAndDelete(_id);
    res.json(result);
});
exports.deleteUser = deleteUser;
