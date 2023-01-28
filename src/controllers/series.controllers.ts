import serieService from "../services/serieService.js";
import httpStatus from "http-status";
import { Request, Response } from "express";

export async function getAllSeries(req: Request, res: Response) {
 try {
   const series = await serieService.getSeries();
   res.send(series)
 } catch(error) {
  console.log(error);
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
 }

};

export async function getSerie(req: Request, res: Response) {
    const id = parseInt(req.params.id);
   
    try {
        const serie = await serieService.getSerie(id);
        res.send(serie)
      } catch(error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
      } else {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
    }
};

export async function createSeries (req: Request, res: Response) {
    const { nameSeries, description, genre, streaming } = req.body

    try {
      await serieService.postSerie(nameSeries, description, genre, streaming)
      res.sendStatus(httpStatus.CREATED);
    } catch(error) {
     if (error.name === "ConflictError") {
       return res.sendStatus(httpStatus.CONFLICT);
    }
    return res.sendStatus(httpStatus.NOT_FOUND); 
   } 
};