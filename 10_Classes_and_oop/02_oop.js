const user = {
    username: "Pavan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");

        // console.log(`Username: ${username}`); //ReferenceError: username is not defined
        // console.log(`Username: ${this.username}`); 

        console.log(this);
        /*
        {
            username: 'hitesh',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
          }
          */
    }

}

//========================================================================================
/*
1.Function defined in another function:
When a function is defined inside another function, it creates what's known as a "closure." This means that the inner function has access to its own scope, the scope of the outer function (including its variables and parameters), and the global scope. 

2.Function defined in an object:
When a function is defined as a method within an object, it creates a different context called the object's context or the "this" context. Inside this function, the "this" keyword refers to the object itself. So, the function has access to the properties and methods of the object via the "this" keyword.
*/

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this); //{} - global context ccontain nothing now for node. Since we took this method out of the browser. Inside browser this will give window object.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this //this is implicitly returned.so we don't need to define it explicitly 
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false) //Just giving another alias refering to user function and calling/updating/overiding values with new input.

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) 
/* When new is written-
1. New object created: An empty object gets created which is called as Instance
2.Constructor function called : It pack all the arguments and all give it to us.
3. Arguments gets injected into 'this' keyword 
/4. We get those arguments in our function.*/

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor); //[Function: User]  -  Constructor property is a reference about the same function itself.


//Instance of ===================================================================
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true

  //Yes, in JavaScript, functions are indeed objects. This means that functions can have properties and methods just like any other object in JavaScript. This is a key feature of the language that allows for powerful and flexible programming patterns.
  //This object-like behavior of functions in JavaScript is what enables advanced programming techniques such as functional programming and the use of higher-order functions.