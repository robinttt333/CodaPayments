import { NextFunction, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";

/**
 * Read the list of valid ip addresses from the environment
 */
const envPath = path.resolve(__dirname, "..", "..", "..", ".env");
const config = dotenv.config({ path: envPath });
const validIps = JSON.parse(config.parsed!.VALID_IPS);

/**
 * Custom middleware to whitelist different ip addresses
 */
export default (req: Request, res: Response, next: NextFunction) => {
  if (validIps.includes(req.socket.remoteAddress as string)) {
    next();
  } else {
    const errorMessage = "Invalid IP: " + req.socket.remoteAddress;
    const err = new Error(errorMessage);
    next(err);
  }
};
