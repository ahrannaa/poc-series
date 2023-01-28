import joi from "joi";
export const seriesSchema = joi.object({
    nameSeries: joi.string().required(),
    description: joi.string().min(10).required(),
    genre:joi.string().required(),
    streaming: joi.string().required()
  });