import { exec } from "child_process";
import { Deployment } from "../config";
import path from "path";

const executeDeployment = (
  deployment: Deployment,
  deployDir: string,
  scriptsDir: string
) => {
  const scriptPath = path.join(scriptsDir ? scriptsDir : "", deployment.script);
  const servicePath = path.join(
    deployDir ? deployDir : "",
    deployment.servicePath
  );
  console.log(`Executing deployment script: ${scriptPath}`);
  console.log(`Service path: ${servicePath}`);
  exec(
    `"${path.join(scriptsDir, deployment.script)}" "${servicePath}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  );
};

export default executeDeployment;
