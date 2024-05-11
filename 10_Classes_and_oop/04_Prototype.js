let myName = "Pavan      "
let mytea = "chai     "


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower : function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Pavan = function () {
    console.log("Pavan is present in all objects");
}

Array.prototype.heyPavan = function() {
    console.log(`Pavan says hello from array`);
}

// heroPower.Pavan()
myHeros.Pavan() //Pavan is present in all objects
myHeros.heyPavan() //Pavan says hello from array
// heroPower.heyPavan()

// Inheritance ==================================================================================
const user = {
    name: "Tea",
    email:"tea@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__:TeachingSupport //__proto__ = used to inherit property from other objects.
}

Teacher.__proto__=user

console.log(Teacher.email); //tea@google.com
console.log(TASupport.isAvailable); //false

//Modern syntax for inheritance/__proto__ :
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.makeVideo) //true

String.prototype.trueLength= function(){
    console.log(this); //[String: 'Pavan      ']
    console.log(`${this}`); //Pavan
    console.log(`True length is:${this.trim().length}`); //True length is:5
    return this.trim().length
}

console.log( myName.trueLength());

"Colddrink".trueLength()
// [String: 'Colddrink']
// Colddrink
// True length is:9
"PavanSingh".trueLength()
// [String: 'PavanSingh']
// PavanSingh
// True length is:10

