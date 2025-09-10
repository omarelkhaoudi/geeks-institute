// Daily challenge : Groceries
// Arrow function : displayGroceries 

const displayGroceries = () => {
    displayGroceries.fruits.forEach(fruit => console.log(fruit));
}

// Arrow function : clonedGroceries

const cloneGroceries = () => {
    let user = client; // copy the value of client
    client = "Betty"; // modify client

    console.log("user:", user);
    console.log("client:", client);
}

clonedGroceries();
// Why? The change in client does NOT affect user, because they are two separate values in memory

// same function just i change the name

const clonedGroceries = () => {
    let shopping = groceries; // shopping points to the SAME object in memory

    // Modify values 
    shopping.totalPrice = "35$";
    shopping.other.paid = false;

    console.log("groceries:", groceries);
    console.log("shopping:", shopping);
}

clonedGroceries(); 
// Why? Because both groceries and shopping point to the same memory location.

