import { Response } from "express";
import { GitHubPushEvent } from "../types/github";
import { verifySignature } from "../utils/verifySignature";
import config from "../config";
import executeDeployment from "../utils/executeDeployment";

const handlePing = (res: Response) => {
    res.send("pong")
}

const handlePushEvent = (body: GitHubPushEvent, res: Response) => {
    const repositoryName = body.repository.name
    const deployment = config.deployments.find((d) => d.hookName === repositoryName);
    
    if (!deployment) {
      console.error("Deployment not found!");
      res.status(404).send("Deployment not found!");
      return;
    }

    console.log(`Deploying ${deployment.deploymentName}...`);
    executeDeployment(deployment, config.deployDir, config.scriptDir);
    res.status(200).send("Webhook received!");

}

export {handlePing, handlePushEvent}