import { Request, Response } from "express";
import config from "../config";
import executeDeployment from "../utils/executeDeployment";
import { handlePing, handlePushEvent } from "../services/githubServices";
import { GitHubPushEvent } from "../types/github";

const githubController = async (req: Request, res: Response) => {
  // TODO: Make this more organized after getting services connected
  const eventType = req.header("X-GitHub-Event")
  console.log("Event Recieved:", eventType)
  switch (eventType) {
    case "ping":
      handlePing(res)
      break;
    case "push":
      const body: GitHubPushEvent = JSON.parse(req.body.toString('utf8'));
      handlePushEvent(body, res)
  }


};

export default githubController;
