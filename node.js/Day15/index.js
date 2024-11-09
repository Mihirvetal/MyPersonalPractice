const express = require("express");
const path = require("path");
const http = require("http");
const {Server} = require('socket.io')
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.resolve(".", "public", "index.html"));
});

const httpServer = http.createServer(app);
const io = new Server(httpServer)
io.on("connection", (socket)=>{
    console.log("client connected", socket.id);
    socket.on("disconnect", ()=>{
        console.log("disconnected", socket.id);
    })
    socket.on("message", (msg)=>{
        console.log("a message received", msg);
    })
})
httpServer.listen(5000, () => {
  console.log("server started on http://localhost:5000");
});
