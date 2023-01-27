import { NextFunction, Request, Response } from "express";
import { userSchema } from "../schemas/userSchema.js";

export async function userValidationSchema(req: Request, res: Response, next: NextFunction) {
    const { name, email } = req.body

    const validation = userSchema.validate({ name, email }, { abortEarly: false })

    if (validation.error) {
        const erros = validation.error.details.map((detail) => detail.message)
        res.status(400).send(erros)
        return;
    }

    next()
}