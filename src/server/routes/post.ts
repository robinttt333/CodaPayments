import { Request, Response } from "express";

/**
 * Route for all post requests to the servers
 */
export default (application: any) => {
  application.post("*", (req: Request, res: Response) => {
    console.log("Received request on port: " + req.socket.localPort);
    res.send(req.body);
  });
};
