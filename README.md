
# Webhook Server for Automated Deployment

This project is a webhook server built using Express.js to automate the deployment of microservices. It listens for changes pushed to the main branch of your repository and triggers deployment scripts accordingly.

## Project Structure

```
webhook-server/
├── scripts/
│   ├── deploy-service1.sh
│   ├── deploy-service2.sh
│   ├── ...
├── src/
│   ├── routes/
│   │   ├── index.js
│   │   └── webhook.js
│   ├── config/
│   │   └── index.js
│   ├── utils/
│   │   ├── verifySignature.js
│   │   └── executeCommand.js
│   └── app.js
├── .env
├── package.json
├── README.md
└── server.js
```

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your server
- A Git repository hosting service that supports webhooks (e.g., GitHub, GitLab)
- [PM2](https://pm2.keymetrics.io/) for process management (or an equivalent tool)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/webhook-server.git
   cd webhook-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```plaintext
   WEBHOOK_SECRET=your-webhook-secret
   PORT=3000
   ```

   - Replace `your-webhook-secret` with a secure string that you will also configure in your Git service webhook settings.

## Configuration

1. **Configure your Git service to send webhooks:**

   - **GitHub:**
     - Go to your repository on GitHub.
     - Navigate to **Settings** > **Webhooks** > **Add webhook**.
     - Set the **Payload URL** to your server's URL (e.g., `http://yourserver.com/webhook`).
     - Choose `application/json` as the **Content type**.
     - Add the **Secret** from your `.env` file.
     - Select the `push` event to trigger the webhook.

   - **GitLab:**
     - Go to your repository on GitLab.
     - Navigate to **Settings** > **Webhooks**.
     - Set the **URL** to your server's URL.
     - Set the **Secret Token** from your `.env` file.
     - Choose `Push events` to trigger the webhook.

2. **Create deployment scripts:**

   Create deployment scripts for each microservice in the `scripts/` directory. Each script should handle tasks like pulling the latest code, building the application, and restarting the service.

   Example script (`deploy-service1.sh`):

   ```bash
   #!/bin/bash

   echo "Deploying Service 1..."
   cd /path/to/service1
   git pull origin main
   npm install
   npm run build
   pm2 restart service1
   echo "Service 1 deployed!"
   ```

## Usage

1. **Start the server:**

   ```bash
   node server.js
   ```

   The server will listen for incoming webhook events on the specified port.

2. **Automate deployment:**

   When changes are pushed to the main branch of your repository, the server will trigger the corresponding deployment script based on the repository name.

## Security

- Ensure that your server is properly secured and accessible only to authorized users.
- Verify the signature of incoming webhook requests to prevent unauthorized access.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [PM2](https://pm2.keymetrics.io/)
