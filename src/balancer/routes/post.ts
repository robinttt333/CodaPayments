import { Request, response, Response } from "express";
import axios from "axios";
import RoundRobinBalancer from "../RoundRobinBalancer";
import path from "path";
import dotenv from "dotenv";

export default (app: any) => {
  const envPath = path.resolve(__dirname, "..", "..", "..", ".env");
  const config = dotenv.config({ path: envPath });
  const ports = JSON.parse(config.parsed!.PORTS) as unknown as string[];
  const balancer = new RoundRobinBalancer(ports);

  app.post("*", async (req: Request, res: Response) => {
    const responseFromServer = await axios.post(balancer.getURL(), req.body);
    res.send(JSON.stringify(responseFromServer.data));
  });
};
