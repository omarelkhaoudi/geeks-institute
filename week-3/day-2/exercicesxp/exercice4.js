const readline = require("readline-sync");

// 1) Hotel Cost
function hotelCost() {
    let nights;
    do {
        nights = parseInt(readline.question("Enter number of nights you want to stay at the hotel: "));
    } while (isNaN(nights) || nights < 1);
    return nights * 140;
}

// 2) Plane Ride Cost
function planeRideCost() {
    let destination;
    do {
        destination = readline.question("Enter your travel destination: ").toLowerCase();
    } while (!destination || !isNaN(destination));

    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

// 3) Car Rental Cost
function rentalCarCost() {
    let days;
    do {
        days = parseInt(readline.question("Enter number of days you want to rent a car: "));
    } while (isNaN(days) || days < 1);

    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply 5% discount
    }
    return cost;
}

// 4) Total Vacation Cost
function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}.`);
    return `Total vacation cost: $${hotel + plane + car}`;
}

console.log(totalVacationCost());