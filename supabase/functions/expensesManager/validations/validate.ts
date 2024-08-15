// @deno-types="@types/express"
import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationChain } from "express-validator";


export const validate = async (
  validations: Array<ValidationChain>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await Promise.all(
    validations.map((validation: ValidationChain) => validation.run(req))
  );
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send(errors.array());
  } else {
    next();
  }
};
