import { Response, Request, NextFunction } from "express";
import { createHmac } from "crypto";
import {config} from "dotenv"
const env = config().parsed
console.log(env)

const verifyGitHubSignature = (req: Request, res: Response, next: NextFunction) => {
    const signature = req.get('X-Hub-Signature-256');
  
    if (!signature) {
      return res.status(400).send('No signature provided');
    }
  
    const hmac = createHmac('sha256', loadGithubSecret());
    hmac.update(req.body, 'utf-8');
    const digest = `sha256=${hmac.digest('hex')}`;
  
    if (digest !== signature) {
      return res.status(401).send('Invalid signature');
    }
  
    next();
  };
  
export {verifyGitHubSignature}


const loadGithubSecret = () => {
    if (!env || !env.GITHUB_SECRET) {
        throw Error("Unable to load secret.")
    }

    return env.GITHUB_SECRET
}