const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Active users in each room
const users = {};

io.on("connection", (socket) => {
  console.log("New user connected:", socket.id);

  // Join room
  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    
    // Store user
    if (!users[room]) users[room] = [];
    users[room].push({ id: socket.id, username });

    // Welcome message
    socket.emit("message", { user: "System", text: `Welcome ${username}!` });
    
    // Notify others
    socket.to(room).emit("message", { user: "System", text: `${username} has joined the room.` });

    // Update active users list
    io.in(room).emit("roomUsers", users[room]);
  });

  // Listen for chat messages
  socket.on("chatMessage", ({ room, message, username }) => {
    io.in(room).emit("message", { user: username, text: message });
  });

  // Disconnect
  socket.on("disconnect", () => {
    for (const room in users) {
      const userIndex = users[room].findIndex(u => u.id === socket.id);
      if (userIndex !== -1) {
        const username = users[room][userIndex].username;
        users[room].splice(userIndex, 1);
        io.in(room).emit("message", { user: "System", text: `${username} has left the room.` });
        io.in(room).emit("roomUsers", users[room]);
      }
    }
  });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
