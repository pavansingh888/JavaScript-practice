const accNo=329883
let accEmail="pava@google.com"
var accPassword = "123abc"
accCity="bhopal" //can be used used but not preferred
let accountState; //value is undefined

// accNo=2 => TypeError: Assignment to constant variable. //Not allowed

accEmail=223253
accPassword="shs1245"
accCity="Mumbai"

// console.log(accNo);
console.table([accNo,accEmail,accPassword,accCity,accountState])

/*
Scope problem used to exist in JS: In initial days javascript didn't used to work on basis of scope. 
prefer not to use var - becuase of issue in block scope and functional scope.
It didn't have control over block scope. (Variable could be changed by two different person using same code at different timeline)

let - In let scope problem was removed
so use let, const
*/

