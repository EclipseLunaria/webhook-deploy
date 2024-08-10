import express from "express";
import bodyParser from "body-parser";
import router from "./routes";

const app = express();
app.use(express.raw({ type: 'application/json' }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", router);
export default app;
