const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const ejs = require("ejs");
const path = require("path")
require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use(express.static('views'));
app.set("view engine","ejs");


// Serve your HTML, CSS, and client-side JavaScript files here.
app.get("/", (req,res) => {
    res.render(path.join(__dirname,"views","index.ejs"));
});

io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('chat message', (message) => {
      io.emit('chat message', message); // Broadcast the message to all connected clients.
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });