// array - Object

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //9 0 1 2 3 4 5 
// myArr.shift() //0 1 2 3 4 5

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1

// const newArr = myArr.join() //adds all the elements of an array into a string

// console.log(myArr);
// console.log( newArr); //typeof newArr - string


// slice, splice

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) //doesn't manipulate orginal array

console.log(myn1); //[ 1, 2 ]
console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(0,3) //Manipulated the original array (index  to start,No. of elements to splice from start)
console.log("C ", myArr); //C  [ 3, 4, 5 ]
console.log(myn2); //[ 0, 1, 2 ]