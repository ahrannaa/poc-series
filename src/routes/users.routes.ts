import { Router } from "express";
import { createUser, getAllUsers, getUser } from "../controllers/users.controllers.js";
import { userValidationSchema } from "../middlewares/user.middlewares.js";

const usersRouter = Router();

usersRouter.get("/users", getAllUsers)
usersRouter.get("/users/:id", getUser)
usersRouter.post("/users",userValidationSchema, createUser)

export default usersRouter