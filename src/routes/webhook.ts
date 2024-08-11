import { Router } from "express";
import githubController from "../controllers/githubControllers";
const router = Router();

router.post("/github/", githubController);

export default router;
