import { Request, Response } from "express";

/**
 * Route for all post requests to the servers. Currently, it just sends the request back to the server
 */
export default (app: any) => {
  app.post("*", (req: Request, res: Response) => {
    res.send(req.body);
  });
};
