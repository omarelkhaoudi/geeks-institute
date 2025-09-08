// Kg and grams
// function declaration

function toGramsDec(kg) {
    return kg * 1000;
}
console.log(toGramsDec(5));

// function expression

const toGramsExpr = function(kg) {
    return kg * 1000;
};
console.log(toGramsExpr(3));

// Difference between function dec & function expr

// Function Declaration est hoistée (on peut l’appeler avant sa définition)
// Function Expression n’est pas hoistée (on ne peut l’appeler qu’après sa définition)

// One line arrow function

const toGramsArrow = (kg) => kg * 1000;
console.log(toGramsArrow(7));

