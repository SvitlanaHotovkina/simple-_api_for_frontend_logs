import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import logRouter from "./routes/log";
import { registerLogSocket } from "./sockets/logSocket";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
app.use("/log", logRouter);

registerLogSocket(io);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
