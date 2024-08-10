import app from "./src/app";

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Webhook Deployment Server is running on http://localhost:3000");
});
