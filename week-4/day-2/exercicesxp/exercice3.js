// Analizing
// Instructions

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// output : [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

const country = "USA";
console.log([...country]);
// output : [ 'U', 'S', 'A' ]

let newArray = [...[,,]];
console.log(newArray);
// output : [ undefined, undefined ]
