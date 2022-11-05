import dotenv from "dotenv";
import express from "express";
import path from "path";
import ipWhitelister from "./middleware/ipWhitelister";
import postRoute from "./routes/post";
const envPath = path.resolve(__dirname, "..", "..", ".env");

const config = dotenv.config({ path: envPath });
const portNumbers = JSON.parse(config.parsed!.PORTS) as unknown as string[];

const applications = portNumbers.map((_) => express());

applications.forEach((application, idx) => {
  application.use(express.json());
  application.use(express.urlencoded({ extended: false }));
  application.use(ipWhitelister);
  postRoute(application);
  console.log("listening on port: " + portNumbers[idx]);
  application.listen(portNumbers[idx]);
});
