//      after conversion ValueInNum   -    Type
//let score = 56        //number      
//let score = "56"      //number
//let score = "56abc"   //NaN
//let score = null      //0
//let score = undefined //NaN
//let score = false     //0
let score = "Pavan"   //NaN

// console.log(typeof(score)); //number //string //object
// console.log(typeof score); //number //string //object

let valueInNum = Number(score)

//console.log(typeof valueInNum); //56abc - number
//console.log(valueInNum); //NaN //0 //NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Singh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Singh" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);