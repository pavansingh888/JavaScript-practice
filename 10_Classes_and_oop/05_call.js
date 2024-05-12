// function(){
//     callme()
// }

//for callme, how will it decide this in its execution context. because for it outer layer is function(),but it won't refer function() , it will refer global execution context.
//Problem with global execution context is when we have window object access it will access window{} , but in Node env we don't have window access, so in node env we get empty {} object.

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(username) //this is not an actuall call, because it is getting called , it have its execution context, but after its run its execution context is removed from the stack, so all the variables declared inside its context will also disappear. So those variable won't reach outer function createUser().
    //So we want to hold the reference of those variables.we don't want them to disappear.So to hold reference we use method call().

    SetUsername.call(this, username) //we will pass this of createuser(). so that it will set variable for this createUser()'s "this".
   
    this.email = email
    this.password = password
}

const chai = new createUser("Pavan", "Pavan@fb.com", "123")
console.log(chai);