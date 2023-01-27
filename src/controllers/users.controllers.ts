import userService from "../services/userService.js";
import httpStatus from "http-status";
import { Request, Response } from "express";

export async function getAllUsers(req: Request, res: Response) {
 try {
   const users = await userService.getUsers();
   res.send(users)
 } catch(error) {
  console.log(error);
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
 }

};

export async function getUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
   
    try {
        const user = await userService.getUser(id);
        res.send(user)
      } catch(error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
      } else {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }
};

export async function createUser (req: Request, res: Response) {
    const { name, email } = req.body

    try {
      await userService.postUser(name, email)
      res.sendStatus(httpStatus.CREATED);
    } catch(error) {
     if (error.name === "ConflictError") {
       return res.sendStatus(httpStatus.CONFLICT);
    }
    return res.sendStatus(httpStatus.NOT_FOUND); 
   } 
};
