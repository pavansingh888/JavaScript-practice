// singleton - When we create object from constructor then singleton object is created. That means this object is the only object of its type. 
//When we create it from any other way then multiple instances of it can be created.
//When we declare objects in way of literals then singleton object is not created. #Interview
// Object.create - This is known as object creation thru constructor

// object literals:

const mySym = Symbol("key1")
// console.log(typeof mySym); //symbol
// console.log(mySym); //Symbol(key1)

const JsUser = {
    name: "Pavan",
    "full name": "Pavan Singh", //another way to declare key-value
    // mySym: "myKey1", //wrong syntax to use symbol as key
    [mySym]: "mykey1", //right syntax #Interview
    age: 18,
    location: "Bhopal",
    email: "pavan@google.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //pavan@google.in //bcz behin the scene email key is treated as a string
// console.log(JsUser["full name"]) //pavan@google.in - reason why this way is needed

// console.log(JsUser[mySym],typeof JsUser[mySym]) //right syntax to access symbol key -  i.e without "" #Interview
// console.log(mySym) //Symbol(key1)
// {
//     name: 'Pavan',
//     'full name': 'Pavan Singh',
//     age: 18,
//     location: 'Bhopal',
//     email: 'Pavan@outlook.in',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1' //current it is telling that it is a symbol key otherwise it will come 'mySym' as normal key name 
//   }
JsUser.email = "Pavan@outlook.in"
// console.log(JsUser);
// Object.freeze(JsUser) //to restrict from changing the values of object.
JsUser.email = "Singh@outlook.in" //will not change to this value
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); //Hello JS user
console.log(JsUser.greetingTwo()); //Hello JS user, Pavan
console.log(JsUser.greeting); //[Function (anonymous)]
