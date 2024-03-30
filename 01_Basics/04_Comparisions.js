// console.log(2 > 1);  t
// console.log(2 >= 1); t
// console.log(2 < 1); f
// console.log(2 == 1); f
// console.log(2 != 1); t


 console.log("2" > 1); //t
 console.log("02" > 1); //t
//when comparing 2 value-make sure thier datatype is same.



console.log(null > 0); //f
console.log(null == 0); // f
console.log(null >= 0); // t
//== and > < >= <= work differently
//Comparisions convert null to a number, treating it as 0. that's why null>=0 is true & null>0 is false

console.log(undefined == 0); //f
console.log(undefined > 0); //f
console.log(undefined < 0); //f

// ===  strict check checks value as well as datatype

console.log("2" === 2); //f