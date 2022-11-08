import { Request, Response } from "express";
import { post } from "../services/apiCaller.service";
import { balancer } from "../index";

/**
 * Controller to manage the post requests to the balancer
 */
export default async (req: Request, res: Response) => {
  let responseFromServer = null;
  while (true) {
    try {
      responseFromServer = await post(balancer.getAddress(), req.body);
      break;
    } catch (e) {
      console.log(e);
    }
  }
  res.send(JSON.stringify(responseFromServer.data));
};
