import express, {Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import router from "./routes";

const app = express();
app.use(bodyParser.raw({ type: '*/*', limit: '1mb' }));

app.use((req: Request, res: Response, next: NextFunction) => {
  (req as any).rawBody = req.body; // Store raw body for signature verification
  req.body = JSON.parse(req.body.toString());
  next();
});


app.get("/", (req, res) => res.send("Hello World"));

app.use("/", router);
export default app;
