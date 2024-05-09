//learn How promises are created before promises are consumed.
// The Promise #object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

 //just like we create instance of class = just like we create instance of object in JS. Promise resolves the callback hell.
 const promiseOne = new Promise(function(pavan,reject){
    //Do an asynch task
    //DB calls, cyptography, network
    setTimeout(function(){   //setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.
         console.log("Async task is completed");
         pavan()
    },1000)
    // resolve() //resolve method basically connect promise with then.
 }) 

 promiseOne.then(function(){
    console.log("Promise consumed");
 })



 //2 ==============================================================================================

 new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("aync task 2");
        resolve()
    },1000)
 }).then(function(){
    console.log("Async 2 resolved");
 })

//3 ===================================================================================================

const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username:"Pavan",email:"pavan@nosite.com"}) //mostly data passed will be object . but array, function etc can also be passed in resolve.
    },1000)
})

promiseThree.then(function(data){
    console.log(data);

})

//4 ===================================================================================================
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Pavan", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// const use= // can't take return value of promise in variable, log O/P = Promise { <pending> }
promiseFour
 .then((user) => {
    console.log(user);
    return user.username
})
.then((uname)=>{
    console.log(uname);
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))

// console.log(use);

//5 ==================================================================================================

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){  //Another way of consuming promise using async await. The only difference is Async await doesn't gracefully handle error like it is done in .then .catch. So we have to explicitly mention the try-catch block to handle error.

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//Next topic ===============================================================================================

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/pavansingh888')
        const data = await  response.json() //await bcz data parsing will take time
        // Body.json() is asynchronous and returns a Promise object that resolves to a JavaScript object.
        //  JSON.parse() is synchronous can parse a string and change the resulting returned JavaScript object.
        //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.     
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//fetch Intro =======================================================================================================
fetch('https://api.github.com/users/pavansingh888')
.then((response) => {
    return response.json() //===


// - Use response.json() when you are dealing with HTTP responses and want to parse the JSON directly from the response object.
// -extract JSON data from an HTTP response object. It's a method provided by the Fetch API for convenience.

// return JSON.parse(response) ===
// - Use JSON.parse() when you have a JSON string that you want to parse into a JavaScript object, which may come from sources other than HTTP responses, such as local storage, AJAX requests, etc.
// -This is a standalone JavaScript function that parses a JSON string and returns a JavaScript object. 

})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all ===============================================================================================
// Promise.all(iterable)
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // Expected output: Array [3, 42, "foo"]




