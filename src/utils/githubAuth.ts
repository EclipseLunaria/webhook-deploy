import { Response, Request, NextFunction } from "express";
import { createHmac } from "crypto";
import {config} from "dotenv"
const env = config().parsed

const loadGithubSecret = () => {
    if (!env || !env.GITHUB_SECRET) {
        throw Error("Unable to load secret.")
    }

    return env.GITHUB_SECRET
}

const verifyGitHubSignature = (rawBody: string, signature: string) => {
    // const signature = req.get('X-Hub-Signature-256');
  
    if (!signature) {
      return false
    }
  
    const hmac = createHmac('sha256', loadGithubSecret());
    hmac.update(rawBody, 'utf-8');
    const digest = `sha256=${hmac.digest('hex')}`;
    return digest === signature


  };
  
export {verifyGitHubSignature}
