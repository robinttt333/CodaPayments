import dotenv from "dotenv";
import path from "path";
import getApplicationInstance from "./app";

const envPath = path.resolve(__dirname, "..", "..", ".env");
const config = dotenv.config({ path: envPath });
const portNumbers = JSON.parse(config.parsed!.PORTS) as unknown as string[];

const applications = portNumbers.map((_) => getApplicationInstance());

applications.forEach((application, idx) => {
  console.log("Listening on port: " + portNumbers[idx]);
  application.listen(portNumbers[idx]);
});
