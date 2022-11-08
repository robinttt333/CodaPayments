import express from "express";
import router from "./routes/post.route";
import logger from "./middlewares/logger.middleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use("*", router);

export default app;
