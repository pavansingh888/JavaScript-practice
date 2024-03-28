/*
before 8-10 yrs classess, modules, arrow funtions were not there in JS. but now its there.
JS community didn't want a problem in old code because of new JS.
So if we are using new JS code its should have standard of its own.
for this purpose we "use use strict", although everything in JS runs in strict mode by default.
*/

"use strict";//treat all JS code as newer version

//alert(3+3) //ReferenceError: alert is not defined -- we are using nodejs not browser

//orginal documentation for JS can be found at "https://tc39.es/ecma262/#sec-intro" although we use MDN docs mostly.
//Different browsers had diff standards so ECMAscript org was made to write standards. Like how u I/P and O/P thru a loop.

let name="Pavan"
let age=10
let isLoggedIn=true
let state1 ="" //string
let state2; //Undefined
let state3 = null //represent of empty value (if we don't wanna get 0 for not having temperature from an TempAPI we can use null)




//number => 2 to power 53
//bigint
//string => ""
// boolean => true / false
// null => standalone vale/represent of empty value - it is data type
// undefined - When the value is not defined for variable
// symbol => unique - used in react to define uniqueness of components
// object

console.log(typeof null); //object 
console.log(typeof undefined); //undefined

//undefined - is datatype in itself, whereas null is an object
