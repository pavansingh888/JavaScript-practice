// Immediately Invoked function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai() //DB CONNECTED - it is immediately invoked

(function chai(){
    console.log(`DB CONNECTED`);
})(); // DB CONNECTED

// ()() //1st is fx definition, 2nd is execution call

// #Interview - Due to global scope's pollution, problem occurs sometimes, so for that global scope variables and declaration's pollution can be prevented/removed by use of IIFE.

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })() //gives error - TypeError: (intermediate value)(...) is not a function



// (function chai(){
//     console.log(`DB CONNECTED TWO`);
// })() //Still gives error for same 2nd function also - TypeError: (intermediate value)(...) is not a function

//#Interview - Reason : this IIF is although invoked, but it doesn't know where to stop the context. So in this situation in JS we have to end the line of first IIFE using ;.  O/P will be - DB CONNECTED DB CONNECTED TWO 

(function chai(){  //Named IIFE - #Interview
    console.log(`DB CONNECTED TWO`);
})(); //DB CONNECTED TWO

( (name)=> {  //Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Pavan")  //DB CONNECTED TWO Pavan


