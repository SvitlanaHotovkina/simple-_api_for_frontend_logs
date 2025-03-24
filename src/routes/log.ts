import express, { Router, Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { sendLogToClients } from "../sockets/logSocket";

const router = express.Router();
const logFile = path.join(__dirname, "../../logs/app.log");

// ...

router.post("/", (req: Request, res: Response) => {
  const logLine = `[${new Date().toISOString()}] ${JSON.stringify(req.body)}\n`;
  fs.appendFileSync(logFile, logLine, "utf8");
  sendLogToClients(logLine);
  res.status(204).end();
});
const getLogsHandler = (req: Request, res: Response): void => {
  if (!fs.existsSync(logFile)) {
    res.send("");
    return;
  }
  const logs = fs.readFileSync(logFile, "utf8");
  res.type("text/plain").send(logs);
};

router.get("/", getLogsHandler);

export default router;
