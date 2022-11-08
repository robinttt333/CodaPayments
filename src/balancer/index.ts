import dotenv from "dotenv";
import path from "path";
import app from "./app";
import RoundRobinBalancer from "./models/RoundRobinBalancer";

const envPath = path.resolve(__dirname, "..", "..", ".env");
const config = dotenv.config({ path: envPath });

export const balancer = new RoundRobinBalancer(
  JSON.parse(config.parsed!.PORTS),
  config.parsed!.URL
);

const serverPort = config.parsed!.PORT as unknown as String;
app.listen(serverPort, () => {
  console.log("Balancer is listening on port: " + serverPort);
});
