const name = "Pavan"
const repoCount = 50

// console.log(name + repoCount + " Value");

//String Interpolation 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Use backtik instead of concat - preferred

const gameName = new String('Pavan-Singh') //using object of JS

// console.log(gameName[0]); //P
// console.log(gameName.__proto__); //{}


console.log(gameName.length); //11
//  console.log(gameName.toUpperCase()); //PAVAN-SINGH
// console.log(gameName.charAt(2)); //v
// console.log(gameName.indexOf('v')); //2

const newString = gameName.substring(0, 4)
console.log(newString);//Pava

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);//ava

const newStringOne = "   Singh    "
console.log(newStringOne);//   Singh    
console.log(newStringOne.trim());//singh

const url = "https://Goodle.com/Singh%20pavan"

console.log(url.replace('%20', '-')) // https://Goodle.com/Singh-pavan
console.log(url.includes('goodle')) //false

console.log(gameName.split('-'));  //[ 'Pavan', 'Singh' ]