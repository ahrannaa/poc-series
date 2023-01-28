import { Router } from "express";
import { getAllSeries, getSerie, createSeries } from "../controllers/series.controllers.js";
import { serieValidationSchema } from "../middlewares/serie.middlewares.js";


const seriesRouter = Router();

seriesRouter.get("/series",getAllSeries)
seriesRouter.get("/series/:id",getSerie )
seriesRouter.post("/series", serieValidationSchema, createSeries)

export default seriesRouter