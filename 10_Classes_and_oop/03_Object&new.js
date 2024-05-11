/*
Javascript’s default behaviour is prototypal behavior.

prototype gives access to new word, classes, this keyword, prototypal inheritance.

Prototypal inheritance in JavaScript is a mechanism by which an object can inherit properties from another object. This is achieved through the use of prototypes. Every object in JavaScript has a prototype from which it can inherit properties. If a property is not found on the object itself, JavaScript will look for it on the object's prototype, and if it's not found there, it will continue to look up the prototype chain until it either finds the property or reaches an *object with a null prototype*. This mechanism allows for a high level of code reuse and flexibility, and is one of the key features of JavaScript that enables it to support object-oriented programming paradigms.

The prototype is a vital aspect of JavaScript as it plays a crucial role in the object-oriented nature of the language. Prototypes allow for property and method inheritance among objects, promoting code reuse and efficiency. When a method or property is not found within an object, JavaScript will traverse the prototype chain to find it. This allows objects to 'inherit' methods and properties from their prototype. It's through this prototypal behavior that JavaScript achieves the dynamic and flexible nature that makes the language so widely used and powerful.

In JS everything is a object , so all property which object has will, be inherited/ available in prototype of array,string, function whether its usable or not it does not matter.
*/

function multipleBy5(num){
    return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{}
//therefore in JS everything is object.here function is function as well as object.
//Object's prototype is null.

function createUser(username, score){
    this.username = username
    this.score = score

}

createUser.prototype.increment = function () {
    score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// const chai = createUser("chai", 25) //#Interview: TypeError: Cannot read properties of undefined (reading 'printMe').  
//Property is injected in the prototype of function.But we havn't told the "chai" reference while transfering values from functuion to chai that it have additional properties like increment and printme. - So to inform this all, we use new keyword.

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe() // price is 25


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

So JS doesn't give constructor functions thru classes, but JS give constructor functions thru new keyword.
So for devlopers sugar coated class and object syntax is given. But behind the scene this is what happens.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/