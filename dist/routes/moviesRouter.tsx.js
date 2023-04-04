"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = require("../controllers/movieController");
const moviesRouter = (0, express_1.Router)();
moviesRouter.get("/", movieController_1.findAllMovies);
moviesRouter.get("/count", movieController_1.countAllMovies);
moviesRouter.get("/:_id", movieController_1.findMovieById);
exports.default = moviesRouter;
