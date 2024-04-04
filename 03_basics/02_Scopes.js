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

