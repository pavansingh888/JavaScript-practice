/*
differences between normal functions and arrow functions with code examples:

1. this Binding:
javascript
Copy code
// Normal function
function greet() {
    console.log(this.name);
}

const person1 = {
    name: 'Alice',
    greet: greet
};

const person2 = {
    name: 'Bob',
    greet: greet
};

person1.greet(); // Outputs: Alice
person2.greet(); // Outputs: Bob

// Arrow function
const greetArrow = () => {
    console.log(this.name);
};

const person3 = {
    name: 'Charlie',
    greet: greetArrow
};

const person4 = {
    name: 'David',
    greet: greetArrow
};

person3.greet(); // Outputs: undefined (lexical this binding)
person4.greet(); // Outputs: undefined (lexical this binding)
In this example, the greet function behaves differently depending on whether it's a normal function or an arrow function. The this keyword inside the normal function refers to the object that invokes the function (person1 and person2), while inside the arrow function, this is lexically bound to the outer scope, which in this case is the global scope, where this.name is undefined.

2. Arguments Object:
javascript
Copy code
// Normal function
function sum() {
    console.log(arguments);
}

sum(1, 2, 3); // Outputs: { '0': 1, '1': 2, '2': 3 }

// Arrow function
const sumArrow = () => {
    console.log(arguments);
};

sumArrow(1, 2, 3); // ReferenceError: arguments is not defined
In this example, the sum function, being a normal function, has access to the arguments object, which contains all the arguments passed to the function. However, the sumArrow arrow function throws a ReferenceError because arrow functions do not have their own arguments object.

3. Return Statement:
// Normal function
function square(x) { //{} needed in JS , but not in TS
    x * x;
}
// Arrow function
const squareArrow = x => x * x;

console.log(square(5)); // Outputs: 25
console.log(squareArrow(5)); // Outputs: 25
Both the square function and the squareArrow arrow function calculate the square of a number x. Since both functions have only one expression in their body, they can omit the curly braces {} and the return keyword, and the result will be implicitly returned.
#Interview:
In JavaScript, arrow functions (() => { ... }) behave differently from regular functions when it comes to the value of this. Arrow functions do not have their own this context; instead, they inherit this from the surrounding lexical context (i.e., the context in which they are defined). 
In your code, the second arrow function is defined within the object literal (lol). However, the object literal itself doesn't create a new scope; it's still within the global scope (unless it's inside a function).
*/

// let lol = {
//     name: 'Andrew Tate',
//     first() {
//       console.log(this.name + ' Loves AngularJS');
//     },
//     second: () => {
//       console.log(this.name + ' Loves himself. F Frameworks.');
//     },
//   };
  
//   lol.first(); //Andrew Tate Loves AngularJS
//   lol.second(); //undefined Loves himself. F Frameworks.


