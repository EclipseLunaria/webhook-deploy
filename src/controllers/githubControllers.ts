import { Request, Response } from "express";
import { handlePing, handlePushEvent } from "../services/githubServices";
import { verifyGitHubSignature } from "../utils/githubAuth";

const githubController = async (req: Request, res: Response) => {
  // verify signature
  if (!verifyGitHubSignature((req as any).rawBody.toString(), req.get('X-Hub-Signature-256')||'')){
    res.status(400).send("Invalid Signature")
    return
  }
  console.log(req.body)
  const eventType = req.header("X-GitHub-Event")
  console.log("Event Recieved:", eventType)
  console.log(req.body)
  switch (eventType) {
    case "ping":
      handlePing(res)
      break;
    case "push":
      handlePushEvent(req.body, res)
  }


};

export default githubController;
