// Welcome

(function(username) {
    const nav = document.querySelector("nav");

    // Create container for user info
    const userDiv = document.createElement("div");
    userDiv.className = "user-info";

    // Create text (username)
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `Welcome, ${username}`;

    // Create a profile picture
    const img = document.createElement("img");
    img.src = "https://i.pravatar.cc/150?u=" + username;
    img.alt = `${username}'s profile picture`;

    // Append to userDiv
    userDiv.appendChild(nameSpan);
    userDiv.appendChild(img);

    // Add to Navbar
    nav.appendChild(userDiv);
})("John");