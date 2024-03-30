// # Primitive or Non-Primitive: Difference = call by value  or call by reference. How these values are stored and accessed.

//  Primitive : All primitives are call by value. When ever they are accessed. Reference is not given instead copy of the value stored in the primitive DT is passed.

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//JS is Dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //object
let userEmail; //undefined

const id = Symbol('123') //typeof id = symbol
const anotherId = Symbol('123') 

console.log(id === anotherId); //false

const bigNumber = 3456543576654356754n //BigInt - use n at the end



// # Reference Type (Non primitive): Reference of these in the memory can be directly allocated when we try to access these DT.

// Array, Objects, Functions : All are of Object type but Functions is function object type, although it gives function

const heros = ["shaktiman", "naagraj", "doga"]; //typeof heros - object

let myObj = { //typeof myObj - object
    name: "hitesh",
    age: 22,
}

//function can be treated as variable in JS
const myFunction = function(){  //typeof myFunction = funtion, but it is known as - function object.
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3