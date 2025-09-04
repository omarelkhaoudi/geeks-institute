let shoppingList = [];
const root = document.getElementById("root");

const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item";
const addBtn = document.createElement("button");
addBtn.textContent = "Add Item";

form.appendChild(input);
form.appendChild(addBtn);

const clearBtn = document.createElement("button");
clearBtn.textContent = "ClearAll";

const list = document.createElement("ul");

root.appendChild(form);
root.appendChild(clearBtn);
root.appendChild(list);

function addItem(event) {
    event.preventDefault();
    const item = input.value.trim();
    if (item !== "") {
        shoppingList.push(item);
        renderList();
        input.value = "";
    }
}

function clearAll() {
    shoppingList = [];
    renderList();
}

function renderList() {
    list.innerHTML = "";
    shoppingList.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearAll);