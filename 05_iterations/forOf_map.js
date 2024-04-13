// for of
// for of can be used to iterate over map but not over object.
// Key as well as value of map can be provided andf manipulated by a user, but in  object we can only manipulate value of keys. (Security difference)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {
    
// }

for (const num of arr) {
    // console.log(num); //1 2 3 4 5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`) //H e l l o   w o r l d !
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const key of map) {
    // console.log(key);
    /*
    [ 'IN', 'India' ] //array
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ] 
*/
// console.log(key, ':-', value);
}

for (const [key] of map) {
    let value=key
    // console.log(key);
    //IN
   // USA
    // Fr
// console.log(key, ':-', value);
}

for (const [key,value] of map) { //array destructure
// console.log(key, ':-', value);
// IN :- India
// USA :- United States of America
// Fr :- France
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { //TypeError: myObject is not iterable
//     console.log(key, ':-', value);
    
// }