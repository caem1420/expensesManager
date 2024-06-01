// @deno-types="@types/express"
import { Request, Response, NextFunction } from "express";
import * as expressValidator from "express-validator";
import { validate } from "./validate.ts";

export const validateExpense = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validations = [
    expressValidator.body("description").exists().isString(),
    expressValidator.body("type").exists().isNumeric(),
  ]
  validate(validations, req, res, next);
};
