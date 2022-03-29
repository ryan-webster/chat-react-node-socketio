const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// Initialise new instance of socket.io by passing 
// the server object
const { Server } = require("socket.io");
const io = new Server(server);

// 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// listen for connection events and log to console when new connection occurs
io.on('connection', (socket) => {
  console.log('a user connected');
  
  //Listen for disconnection events
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  //Listen for chat message events
  socket.on('chat message', (msg) => {
    console.log('new message: ' + msg);
  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});
