import { Request, Response, Router } from "express";
import { postRequestController } from "../controllers/post.controller";

const router = Router();
router.post("*", postRequestController);

export default router;
