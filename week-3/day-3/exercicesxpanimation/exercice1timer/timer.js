// Part 1
// 1-2)

setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part 2
// 1-2)

setTimeout(() => {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part 3

let count = 0;
const container = document.getElementById("container");

const intervalId = setInterval(() => {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    count++;
    if (count >= 5) {
        clearInterval(intervalId);
    }
}, 2000);
