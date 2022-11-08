import express from "express";
import ipWhitelister from "./middlewares/ipWhitelister.middleware";
import postRoute from "./routes/post.route";
import requestLogger from "./middlewares/logger.middleware";

export default () => {
  const app = express();
  app.use(requestLogger);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(ipWhitelister);
  app.use(postRoute);
  return app;
};
