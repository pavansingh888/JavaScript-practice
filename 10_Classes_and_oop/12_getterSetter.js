//In 90% cases we will get class based syntax of get set in codebase

class user{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //getters & setters exist in every class by default and they have default behavior
// to control getter and setter, we can apply getter and setter on the available properties of class:
//name of getter & setter functions are same as the property name.

get email(){
    return this._email.toUpperCase()
}
set email(value){
    return this._email = value
}

get password(){
    // return this._password.toUpperCase() //TypeError: Cannot set property password of #<user> which has only a getter --> if we are defining getter or setter we have to define other one.

    //angeError: Maximum call stack size exceeded at get password [as password]

    return `${this._password}hitesh`
}

set password(value){
    this._password=value //RangeError: Maximum call stack size exceeded at set password [as password]//Object constructor and setter both will start setting value again again.

}


}

const pavan = new user("pavan@ai","shsj")
console.log(pavan.password,pavan.email);