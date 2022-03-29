const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

// Initialise new instance of socket.io by passing
// the server object
const { Server } = require("socket.io");
const io = new Server(server);

//

var path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.resolve("../client/index.html"));
});

// listen for connection events and log to console when new connection occurs
io.on("connection", (socket) => {
  console.log("a user connected");

  //Listen for disconnection events
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  //Listen for chat message events
  socket.on("chat message", (msg) => {
    // emit is used to send messages to every connected user
    io.emit("chat message", msg);

    console.log("new message: " + msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
