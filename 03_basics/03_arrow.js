const user= {
    username: "Pavan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // to refer current context
        console.log(this);  /*Pavan, welcome to website
        {
          username: 'Pavan',
          price: 999,
          welcomeMessage: [Function: welcomeMessage]
        }
        sam, welcome to website
        {
          username: 'sam',
          price: 999,
          welcomeMessage: [Function: welcomeMessage]
        } */
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //{}  - refering to node environment, global scope currently don't have any variable. If we use above line of code in chrome console we will get window object as global object. since prevously we only had JS engine in browser. #Interview


function chai(){
    let username="pavan"
    console.log(this.username); //undefined - so context is only working for objects but not for function
    console.log(this); //global node object
}

// chai()


// const chai = function(){
//     let username="singh"
//     console.log(this.username); //undefined
//     console.log(this); //global node object 
// }


// const chai = () => {
//     let username="singh"
//     console.log(this.username); //undefined
//     console.log(this); //{}
// }
chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4)); //7


// const addTwo = (num1,num2) => num1+num2 //implicit return

// const addTwo = (num1,num2) => ( num1+num2 ) //for () return keyword is not needed, for {} return keyword is needed

// const addTwo = (num1,num2) => {username:"pavan" } //to return object we need to use () //undefined


const addTwo = (num1,num2) =>( {username:"pavan" } )
console.log(addTwo(3,4)); //{ username: 'pavan' }

const myArray = [4,6,2,8,2]

// myArray.forEach(function (){})
// myArray.forEach(() => ())
// myArray.forEach(() => {})
