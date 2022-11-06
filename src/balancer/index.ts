import dotenv from "dotenv";
import path from "path";
import post from "./routes/post";
import express from "express";
import logger from "./middleware/logger";
const envPath = path.resolve(__dirname, "..", "..", ".env");
const config = dotenv.config({ path: envPath });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
const serverPort = config.parsed!.PORT as unknown as String;
post(app);
app.listen(serverPort, () => {
  console.log("Balancer is listening on port: " + serverPort);
});
