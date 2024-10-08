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
    deployDir: "/home/eclipse-deployment/deployments/manga-reader",
  scriptDir: path.join(__dirname, "../scripts"),
  deployments: [
    {
      deploymentName: "Client",
      servicePath: "/client",
      script: "deploy-client.sh",
      hookName: "manga-reader-client",
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
      hookName: "database-service",
    },
    {
      deploymentName: "Series Info Service",
      servicePath: "services/series-info",
      script: "deploy-service.sh",
      hookName: "series-info-service",
    },
    {
      deploymentName: "Authentication Service",
      servicePath: "/authentication-service",
      script: "deploy-service.sh",
      hookName: "authentication-service",
    },
  ],
};

export { Deployment, DeployConfig };

export default config;
