// @deno-types="@types/express"
import { Request, Response, NextFunction } from "express";
import * as expressValidator from "express-validator";
import { validate } from "./validate.ts";

export const validateCountry = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validations = [
    expressValidator.body("name").exists().isString()
  ]
  validate(validations, req, res, next);
};
