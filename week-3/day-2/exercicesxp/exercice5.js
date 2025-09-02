// Users
// Instructions

// 1)
const div = document.getElementById("container");
console.log(div);

// 2)
document.querySelectorAll("ul")[0].children[1].textContent = "Richard";

// 3)
document.querySelectorAll("ul")[1].children[1].remove();

// 4)
const lists = document.querySelectorAll("ul");
lists.forEach(list => list.children[0].textContent = "Omar");

// 5-6)
lists.forEach(list => list.classList.add("student_list"));
lists[0].classList.add("university", "attendance");

// 7)
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// 8-9)
document.querySelectorAll("li").forEach(li => {
    if (li.textContent === "Dan") li.style.display = "none";
    if (li.textContent === "Richard") li.style.border = "1px solid black";
});

// 10)
document.body.style.fontSize = "18px";

// Bonus alert
if (div.style.backgroundColor === "lightblue") {
    const users = Array.from(div.textContent.match(/\w+/g));
    alert(`Hello ${users.join(" and ")}`);
}
