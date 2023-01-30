import joi from "joi";

export const reviewSchema = joi.object({
    seriesId: joi.string().required(),
    review: joi.string().min(10).required(),
});