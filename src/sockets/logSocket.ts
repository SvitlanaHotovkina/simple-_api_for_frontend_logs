import { Server } from "socket.io";

let io: Server | null = null;

export const registerLogSocket = (serverIO: Server) => {
  io = serverIO;
  io.on("connection", (socket) => {
    console.log("📡 Socket connected:", socket.id);
    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);
    });
  });
};

export const sendLogToClients = (logLine: string) => {
  if (io) {
    io.emit("log", logLine);
  }
};
