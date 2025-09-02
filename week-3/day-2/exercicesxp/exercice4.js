// Vacation Costs
// Instructions
// 1)

function hotelCost() {
    let nights;
    do {
        nights = parseInt(prompt("Enter number of nights you want to stay at the hotel:"));
    }
    while (isNaN(nights) || nights < 1);
    return nights * 140;
}

// 2)

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Enter your travel destination:").toLowerCase();
    }
    while (!destination || !isNaN(destination));
    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}
let cost = planeRideCost();
alert("Your plane ticket costs: $" + cost);

// 3)

function rentalCarCost () {
    let days;
    do {
        days = parseInt(prompt("Enter number of days you want to rent a car:"));
    }
    while (isNaN(days) || days < 1);
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply 5% discount
    }
    return cost;
}

// 4-5)

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}.`);
    return `Total vacation cost: $${total}`;
}
console.log(totalVacationCost());

// 6) 

function totalVacationCost() {
    let nights;
    do {
        nights = parseInt(prompt("Enter number of nights you want to stay at the hotel:"));
    } while (isNaN(nights) || nights < 1);

    let destination;
    do {
        destination = prompt("Enter your travel destination:");
    } while (!destination || !isNaN(destination));

    let days;
    do {
        days = parseInt(prompt("Enter number of days you want to rent the car:"));
    } while (isNaN(days) || days < 1);

    let hotel = hotelCost(nights);
    let plane = planeRideCost(destination);
    let car = rentalCarCost(days);

    alert(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}`);
    return hotel + plane + car;
}
totalVacationCost();


