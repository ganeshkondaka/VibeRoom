import express from "express";
import  { createServer, Server } from "http";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  console.log("get request is this ...");
  res.sendFile(join(__dirname, '/app/index.html'));
  // res.send("Hello World");
});


// handle socket connections
io.on("connection", (socket) => {
  console.log("a user connected with id: " ,  `${socket.id}` );
})

app.listen(9000, () => {
  console.log(`Server listening on port 9000`);
});
