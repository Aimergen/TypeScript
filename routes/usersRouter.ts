import { Router } from "express";
import { countAllUsers, createUser, deleteUser, findAllUsers, findUserById, updateUser } from "../controllers/usersController";

const usersRouter= Router();

usersRouter.get('/', findAllUsers);
usersRouter.get('/:_id', findUserById);
usersRouter.get('/count', countAllUsers);
usersRouter.post('/', createUser);
usersRouter.put('/:_id', updateUser);
usersRouter.delete('/:_id', deleteUser);

export default usersRouter;