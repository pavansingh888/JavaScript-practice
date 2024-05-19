//here we are using class and defining get set.

const user={
    _email:"fvbj@com", //we use _ to say that we are almost defining a private property.
    _password: "abc",

    get email(){ //basically this gtter setter will not only remain method, it says that gettter & setter are method which we are keeping above property email.
        //actually this get & set are special keyword which are working on this 'email' property here.
        //for user this 'email' is not method but it is property only and he will access it to set or get.
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const tea = Object.create(user) //just we use "new" which is constructor function, similarly we can use create() which is factory function.

console.log(tea.email);