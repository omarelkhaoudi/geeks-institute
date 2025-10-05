const socket = io();

// Get username and room from URL
const { username, room } = Object.fromEntries(new URLSearchParams(window.location.search));

// Join chat room
socket.emit("joinRoom", { username, room });

// Message from server
socket.on("message", message => {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<strong>${message.user}</strong>: ${message.text}`;
  document.getElementById("chat-messages").appendChild(div);
  div.scrollIntoView();
});

// Active users
socket.on("roomUsers", users => {
  const usersList = document.getElementById("users");
  usersList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.username;
    usersList.appendChild(li);
  });
});

// Message submit
document.getElementById("chat-form").addEventListener("submit", e => {
  e.preventDefault();
  const msg = document.getElementById("msg").value;
  socket.emit("chatMessage", { room, message: msg, username });
  document.getElementById("msg").value = "";
  document.getElementById("msg").focus();
});
