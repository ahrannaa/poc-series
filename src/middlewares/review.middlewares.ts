import { NextFunction, Request, Response } from "express";
import { reviewSchema } from "../schemas/reviewSchema.js";

export async function reviewValidationSchema(req: Request, res: Response, next: NextFunction) {
    const { seriesId, review } = req.body

    const validation = reviewSchema.validate({ seriesId, review }, { abortEarly: false })

    if (validation.error) {
        const erros = validation.error.details.map((detail) => detail.message)
        res.status(400).send(erros)
        return;
    }

    next()
}