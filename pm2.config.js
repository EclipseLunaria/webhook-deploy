module.exports = {
  apps: [
    {
      name: "deployment-server",
      script: "node_modules/.bin/ts-node",
      args: "./server.ts",
      cwd: "./",
      watch: false, // Enable watch mode
      ignore_watch: ["node_modules"],
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
