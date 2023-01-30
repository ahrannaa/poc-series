import { Router } from "express";
import { createReview, getAllReview, getUserReview } from "../controllers/review.controllers.js";
import { reviewValidationSchema } from "../middlewares/review.middlewares.js";

const reviewRouter = Router();

reviewRouter.get("/review", getAllReview)
reviewRouter.get("/review/:userId", getUserReview )
reviewRouter.post("/review/:userId",reviewValidationSchema, createReview)
reviewRouter.put("review/:id")
reviewRouter.delete("/review/:id")

export default reviewRouter