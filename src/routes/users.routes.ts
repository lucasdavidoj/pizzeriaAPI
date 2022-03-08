import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const listUsersControler = new ListUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersControler.handle);

export { usersRoutes };
