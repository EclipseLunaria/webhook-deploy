import { Request, Response } from "express";
import config from "../config";
import executeDeployment from "../utils/executeDeployment";

const webhookController = async (req: Request, res: Response) => {
  const { hookName } = req.params;
  console.log(hookName);
  const deployment = config.deployments.find((d) => d.hookName === hookName);
  if (!deployment) {
    console.error("Deployment not found!");
    res.status(404).send("Deployment not found!");
    return;
  }
  console.log(`Deploying ${deployment.deploymentName}...`);
  console.log("Webhook received!");
  console.log(req.body);
  executeDeployment(deployment, config.deployDir, config.scriptDir);
  res.status(200).send("Webhook received!");
};

export default webhookController;
