var c = 300 // doesn't work according to Block scope

// let a = 300

if (true) {
    let a = 10
    const b = 20
    var c=30 //Even if we won't mention var - same behavior
    // console.log("INNER: ", a); //INNER:  10
  
}



//console.log(a); //not defined //300
// console.log(b); //not defined
// console.log(c); //30 this is the problem, 30 should not display as it's acccess should be restricted within the if block scope. if var c =300, then also it will get updated to var c =30 due to var c=30 inside if block.

//core scope inside chrome dev tools is different and example run thru node have different scope. #Interview

function one(){
    const username = "hitesh"

    //child function can access variable of parent functions
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //not defined

     two() //hitesh

}

// one()


//Similarly for if-else
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); //hitesh youtube
    }
    // console.log(website); // not defined - scope error
}

// console.log(username); //  not defined - scope error


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5)) //6  - this is possible

function addone(num){
    return num + 1
}

// console.log(addone(5)) //6

addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization -- due to concept of hoisting, how Fx is placed , declared and thier execution context, how JS treat variables n all.
const addTwo = function(num){ //it can also be called as expression instead of funtion although addTwo is a funtion.

    return num + 2
}