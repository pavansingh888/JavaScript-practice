//      after conversion ValueInNum   -    Type=Number
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
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //OP -3

// console.log(2+2); //OP 4
// console.log(2-2); //OP 0
// console.log(2*2); //OP 4
// console.log(2**3);//OP 8 - 2 to pow 3
// console.log(2/3); //OP 0.6666666666
// console.log(2%3); //OP 2

let str1 = "pavan"
let str2 = " singh"

let str3 = str1 + str2
// console.log(str3); //OP pavan singh

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log( (3 + 4) * 5 % 3); //using bracket is prefered

// console.log(+true); //1
// console.log(+"");   //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);   //101
console.log(gameCounter++); //101
console.log(gameCounter);   //102
console.log(++gameCounter); //103


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion