import path from "path";

type Deployment = {
  deploymentName: string;
  servicePath: string;
  script: string;
  hookName: string;
};
type DeployConfig = {
  deployDir: string;
  scriptDir: string;
  deployments: Deployment[];
};

const config: DeployConfig = {
  //   deployDir: "~/deployments",
  deployDir: path.join(__dirname, "../deployments"),
  scriptDir: path.join(__dirname, "../scripts"),
  deployments: [
    {
      deploymentName: "Client",
      servicePath: "/client",
      script: "deploy-service.sh",
      hookName: "client",
    },
    {
      deploymentName: "API Gateway",
      servicePath: "/api-gateway",
      script: "deploy-service.sh",
      hookName: "api-gateway",
    },
    {
      deploymentName: "Database Service",
      servicePath: "/services/database",
      script: "deploy-service.sh",
      hookName: "database",
    },
    {
      deploymentName: "Series Info Service",
      servicePath: "/series-info",
      script: "deploy-service.sh",
      hookName: "series-info",
    },
  ],
};

export { Deployment, DeployConfig };

export default config;
