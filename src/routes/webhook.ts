import { Router } from "express";
import githubController from "../controllers/githubControllers";
import { verifyGitHubSignature } from "../middlewares/githubAuth";
const router = Router();


router.post("/github/",verifyGitHubSignature, githubController);

export default router;
