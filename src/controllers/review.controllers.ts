import httpStatus from "http-status";
import { Request, Response } from "express";
import reviewService from "../services/reviewService.js";


export async function getAllReview(req: Request, res: Response) {
 try {
   const review = await reviewService.findSeries();
   if(!review){
    res.sendStatus(400)
   }
   return res.send(review)
 } catch(error) {
  console.log(error);
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
 }

};

export async function getUserReview(req: Request, res: Response) {
    const id = parseInt(req.params.id);
   
    try {
        const review = await reviewService.findReviewByUserId(id);
        res.send(review)
      } catch(error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
      } else {
        return res.sendStatus(httpStatus.NOT_FOUND);
      }
    }
};
export async function createReview(req: Request, res: Response) {
  const { seriesId, review  } = req.body
  const { userId } = req.params
  
  try {
    const newReview = await reviewService.postReview(seriesId,review, userId)
    res.send(newReview).status(httpStatus.CREATED);

  } catch(error) {
   if (error.name === "ConflictError") {
     return res.sendStatus(httpStatus.CONFLICT);
  }
  return res.sendStatus(httpStatus.NOT_FOUND); 
 } 
};

