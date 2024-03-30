// Dates - in future TC39 is working on temporal API to make it global API like Math.

let myDate = new Date()
// console.log(myDate); //2024-03-30T17:37:16.782Z
// console.log(myDate.toString()); //Sat Mar 30 2024 17:38:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sat Mar 30 2024
// console.log(myDate.toLocaleString()); //3/30/2024, 5:38:48 PM
// console.log(typeof myDate); //Object #Interview

// let myCreatedDate = new Date(2023, 0, 23) //1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") //1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023") //1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1711821007561
// console.log(myCreatedDate.getTime()); //1673654400000
//Always do comparisions in ms.
// console.log(Math.floor(Date.now()/1000)); //1711821007 #Interview - to convert in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //Month starts from 0
console.log(newDate.getDay()); //starts from Monday, so for 6 its Saturday - Mon - Sun - 1 - 7

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {   //first value internationalization
    weekday: "long", //CTRL+SPACE for all spaces
    
})