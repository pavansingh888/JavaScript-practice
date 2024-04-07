const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// #Interview
// falsy values

// false, 0, -0, BigInt 0n  - zero n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) { //way to check array - preferred
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  //way to check object - preferred
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined //to handle error and and assign different value to our code if error occur and we get response as null or undefined. - it just takes the next possible value.

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")