import { Router } from "express";
import postRequestController from "../controllers/post.controller";

const router = Router();
/**
 * Router for all post requests
 */
router.post("*", postRequestController);

export default router;
