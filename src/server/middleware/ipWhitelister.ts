import { NextFunction, Request, Response } from "express";

/**
 * Custom middleware to whitelist ip
 */
export default (req: Request, res: Response, next: NextFunction) => {
  let validIps = ["::1", "::ffff:127.0.0.1"];
  if (validIps.includes(req.socket.remoteAddress as string)) {
    console.log("Valid IP: ", req.socket.remoteAddress);
    next();
  } else {
    console.log("Invalid IP: " + req.socket.remoteAddress);
    const err = new Error("Invalid IP: " + req.socket.remoteAddress);
    next(err);
  }
};
