import http from "http";
import sio from "socket.io";
var io = require("socket.io");

// const io = sio(server);
export const socketServer = (apps) => {
  const server = http.createServer(apps);
  let socketIO = io(server);
  return socketIO;
};

export const chatListener = (on) => {
  io.on("connection", (socket) => {
    let interval;
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  });
};
const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};
