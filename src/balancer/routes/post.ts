import { Request, response, Response } from "express";
import axios from "axios";
import RoundRobinBalancer from "../roundRobinBalancer";
import path from "path";
import dotenv from "dotenv";
import http from "http";

/**
 * POST route for the load balancer
 */
export default (app: any) => {
  const envPath = path.resolve(__dirname, "..", "..", "..", ".env");
  const config = dotenv.config({ path: envPath });
  const ports = JSON.parse(config.parsed!.PORTS) as unknown as string[];
  const balancer = new RoundRobinBalancer(ports, config.parsed!.URL);

  app.post("*", async (req: Request, res: Response) => {
    const responseFromServer = await axios.post(
      balancer.getAddress(),
      req.body
    );
    res.send(JSON.stringify(responseFromServer.data));
  });
};
