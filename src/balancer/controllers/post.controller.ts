import { Request, Response } from "express";
import { post } from "../services/apiCaller.service";
import { balancer } from "../index";

/**
 * Controller to manage the post requests to the balancer
 */
export const postRequestController = async (req: Request, res: Response) => {
  let responseFromServer = null;
  try {
    responseFromServer = await post(balancer.getAddress(), req.body);
  } catch (e) {
    throw e;
  }
  res.send(JSON.stringify(responseFromServer.data));
};
