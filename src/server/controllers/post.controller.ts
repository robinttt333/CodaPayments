import { Request, Response } from "express";

/**
 * Basic controller to handle all POST requests.
 */
export const postRequestController = (req: Request, res: Response) => {
  res.send(req.body);
};
