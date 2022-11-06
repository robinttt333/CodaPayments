import { Request, Response, NextFunction } from "express";

/**
 * Middleware to log each and every request in the console
 */
export default (req: Request, _: Response, next: NextFunction) => {
  console.log("New request received on " + new Date().toDateString());
  console.log(req.body);
  next();
};
