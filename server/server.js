const path = require("path");
const http = require('http')
const express = require("express");
const socketIO = require('socket.io')
const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 5000
const app = express();
let server = http.createServer(app)
let io = socketIO(server)
io.on('connection', (socket) => {
  console.log('New user connect')

  socket.emit('newMessage', {
    from: 'mike@example.com',
    text: 'Hey. What is going on, this is new message for you',
    createdAt: Date.now()
  })

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage ' ,newMessage)
  })

  socket.on('disconnect' ,() => {
    console.log('Disconnected with client')
  })
})

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log("Server is Up On " + port);
});
