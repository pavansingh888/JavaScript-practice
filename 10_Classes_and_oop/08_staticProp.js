class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ //static stops property or method from being accessed: We use static in case where we don't want to give access of this "createId()" method to every object instance that is instantiated thru this class "User"

        return `123`
    }
}

const Pavan = new User("Pavan")
// console.log(Pavan.createId()) //TypeError: Pavan.createId is not a function
// console.log(User.createId()); // 123

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); //TypeError: iphone.createId is not a function