import { Router } from "express";
import webhookController from "../controllers/webhookController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/github/", webhookController);

export default router;
