// Start here
const promise = new Promise((resolve) => {
  console.log(1);
  resolve();
//Yes, code inside a Promise continues to execute even after it has been resolved. Resolving a Promise merely changes its state from pending to either fulfilled or rejected, but it doesn't stop the execution of the code inside the Promise. & this resolve can be consumed in promise.then(callback) for callback execution irrespective of asynch code(setTimeout) inside promise is completely executed.
//   setTimeout(console.log("dhjd"),1000) //Here console.log return undefines thats why this LOC doesn't act as expected.because setTimeout is expecting call back function here.
  setTimeout(()=>{console.log("Pavan")},1000)
  console.log(2);
});

console.log(3);
console.log(4);

setTimeout(() => {
  console.log(5);
}, 100);

setTimeout(() => {
  console.log(6);
}, 0);
promise.then(() => { //this promise callback will execute asynchronously.
  console.log(7);
});

console.log(8);