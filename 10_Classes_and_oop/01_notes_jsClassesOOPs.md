# Javascript and classes

Does JS have classes? 
it didn't have claases, and technically JS still don't have classes.

Yes, JavaScript does have classes, but it's important to understand that JavaScript's classes are syntactic sugar over the existing prototype-based inheritance model. Prior to the introduction of classes in ECMAScript 2015 (ES6), JavaScript primarily used constructor functions and prototypes to achieve object-oriented programming concepts like inheritance.

1. **Syntax**: 

   ```javascript
   class Rectangle {
       constructor(width, height) {
           this.width = width;
           this.height = height;
       }
   
       calculateArea() {
           return this.width * this.height;
       }
   }
   ```

2. **Prototype-based Inheritance**: Under the hood, JavaScript classes still use prototypal inheritance. The methods defined within a class are added to the prototype of the constructor function. When you create an instance of a class, it inherits these methods from the prototype chain.

3. **Constructor Method**: The `constructor()` method is a special method that gets called when you create a new instance of the class. It's used for initializing object properties.

4. **Instance Methods**: You can define instance methods directly within the class definition. These methods are available on instances of the class.

5. **Static Methods**: You can also define static methods within a class. Static methods are associated with the class itself and can be called without creating an instance of the class.

   ```javascript
   class MathUtils {
       static add(x, y) {
           return x + y;
       }
   }
   ```

6. **Inheritance**: JavaScript classes support inheritance through the `extends` keyword. You can create subclasses that inherit from a superclass.

   ```javascript
   class Square extends Rectangle {
       constructor(side) {
           super(side, side); // Call the superclass constructor
       }
   }
   ```

   ## OOP
 Its a programming paradigm. Basically, structure of writing code or style of writing code.

 Object-oriented programming (OOP) in JavaScript revolves around the manipulation of objects and their interactions. While JavaScript is a versatile language that supports various programming paradigms, including procedural and functional programming, it also offers features for implementing OOP concepts.
The four pillars of Object-Oriented Programming (OOP) are:

1. **Encapsulation**: Encapsulation refers to the bundling of data and methods that operate on the data into a single unit, called an object. This unit restricts access to some of the object's components, preventing direct modification from outside the object's scope. Encapsulation helps in hiding the internal state of an object and only exposes the necessary functionalities to interact with it.

   Example:
   ```javascript
   class Car {
       constructor(make, model) {
           this.make = make; // Public property
           this.model = model; // Public property
           this._mileage = 0; // Private property
       }
       
       // Public method to update mileage
       drive(distance) {
           this._mileage += distance;
       }

       // Public method to get mileage
       getMileage() {
           return this._mileage;
       }
   }

   const myCar = new Car('Toyota', 'Camry');
   myCar.drive(100);
   console.log(myCar.getMileage()); // Output: 100
   ```

2. **Abstraction**: Abstraction involves hiding the complex implementation details of an object and only showing the essential features of the object to the outside world. It allows developers to focus on what an object does rather than how it does it, making code more understandable and maintainable.

   Example:
   ```javascript
   class Shape {
       constructor() {
           if (new.target === Shape) {
               throw new Error('Shape class should not be instantiated directly.');
           }
       }

       // Abstract method to calculate area (to be implemented by subclasses)
       calculateArea() {
           throw new Error('Abstract method calculateArea must be implemented.');
       }
   }

   class Circle extends Shape {
       constructor(radius) {
           super();
           this.radius = radius;
       }

       calculateArea() {
           return Math.PI * this.radius ** 2;
       }
   }

   const circle = new Circle(5);
   console.log(circle.calculateArea()); // Output: 78.54
   ```

3. **Inheritance**: Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This promotes code reuse and establishes a hierarchical relationship between classes, where subclasses can extend and specialize the behavior of their parent classes.

   Example:
   ```javascript
   class Animal {
       constructor(name) {
           this.name = name;
       }

       speak() {
           console.log(`${this.name} makes a sound.`);
       }
   }

   class Dog extends Animal {
       constructor(name, breed) {
           super(name);
           this.breed = breed;
       }

       speak() {
           console.log(`${this.name} barks.`);
       }
   }

   const dog = new Dog('Buddy', 'Labrador');
   dog.speak(); // Output: Buddy barks.
   ```

4. **Polymorphism**: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables flexibility in programming by allowing the same method or property to behave differently based on the object that it is called on. Polymorphism can be achieved through method overriding and method overloading.

   Example:
   ```javascript
   class Animal {
       speak() {
           console.log('Animal makes a sound.');
       }
   }

   class Dog extends Animal {
       speak() {
           console.log('Dog barks.');
       }
   }

   class Cat extends Animal {
       speak() {
           console.log('Cat meows.');
       }
   }

   const animals = [new Dog(), new Cat()];
   animals.forEach(animal => animal.speak());
   // Output:
   // Dog barks.
   // Cat meows.
   ```

 ## Objects

 - collection of properties and methods
 - toLowerCase
 - promises

 ## Why use OOP

 - code resuse easy
 - avoids code mess-up

 ## parts of OOP
 Object literal {}
 - Constructor functions
 - proto,prototypes,prototypal inheritance
 - Classes
 - Instances (new, this)


 




