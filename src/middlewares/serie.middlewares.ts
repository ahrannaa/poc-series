import { NextFunction, Request, Response } from "express";
import { seriesSchema } from "../schemas/seriesSchema.js";

export async function serieValidationSchema(req: Request, res: Response, next: NextFunction) {
    const { nameSeries, description, genre, streaming } = req.body

    const validation = seriesSchema.validate({ nameSeries, description, genre, streaming }, { abortEarly: false })

    if (validation.error) {
        const erros = validation.error.details.map((detail) => detail.message)
        res.status(400).send(erros)
        return;
    }

    next()
}