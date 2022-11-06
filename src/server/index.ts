import dotenv from "dotenv";
import express from "express";
import path from "path";
import ipWhitelister from "./middleware/ipWhitelister";
import postRoute from "./routes/post";
import requestLogger from "./middleware/logger";

/**
 *  This method instantiates the application with the different middlewares
 */
const initMiddleware = (app: any) => {
  app.use(requestLogger);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(ipWhitelister);
};

const envPath = path.resolve(__dirname, "..", "..", ".env");
const config = dotenv.config({ path: envPath });
const portNumbers = JSON.parse(config.parsed!.PORTS) as unknown as string[];

// Create as many express applications as there are port numbers in the env
const applications = portNumbers.map((_) => express());

applications.forEach((application, idx) => {
  initMiddleware(application);
  postRoute(application);
  console.log("Listening on port: " + portNumbers[idx]);
  application.listen(portNumbers[idx]);
});
