import { NextFunction, Request, Response } from "express";
import { request } from "http";

/**
 * Middleware to log each and every request in the console
 */
export default (req: Request, _: Response, next: NextFunction) => {
  console.log(
    "Request received on port: " +
      req.socket.localPort +
      " from address: " +
      req.socket.remoteAddress +
      " at time: " +
      new Date().toDateString()
  );
  next();
};
