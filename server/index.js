const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server({
  cors: true,
});
const app = express();

app.use(bodyParser.json());

email_to_socket_mapping = new Map();

io.on("connection", (socket) => {
  console.log("new socket connected");
  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log("user :", emailId, "joined room :", roomId);
    email_to_socket_mapping.set(emailId, socket.id);

    socket.join(roomId); //socket joined in the room
    socket.emit('joined-room',{roomId})
    socket.broadcast.to(roomId).emit("user-joined", { emailId }); // telling the other people in the room about this new user
  });
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
io.listen(8001);
