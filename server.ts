import app from "./src/app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Webhook Deployment Server is running on http://localhost:4000");
});
