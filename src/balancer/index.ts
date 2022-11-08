import dotenv from "dotenv";
import path from "path";
import express from "express";
import logger from "./middlewares/logger.middleware";
import RoundRobinBalancer from "./models/roundRobinBalancer";
import router from "./routes/post.route";

const envPath = path.resolve(__dirname, "..", "..", ".env");
const config = dotenv.config({ path: envPath });
const app = express();

export const balancer = new RoundRobinBalancer(
  JSON.parse(config.parsed!.PORTS),
  config.parsed!.URL
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use("*", router);
const serverPort = config.parsed!.PORT as unknown as String;
app.listen(serverPort, () => {
  console.log("Balancer is listening on port: " + serverPort);
});
