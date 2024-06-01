// @deno-types="@types/express"
import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, _res: Response, next: NextFunction) => {
  const date = new Date();
  console.log(`${date.toISOString()} - ${req.method} - ${req.path} - ${_res.statusCode}`,);
  next();
}
