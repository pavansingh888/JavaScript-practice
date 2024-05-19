function User(email, password){
    this._email  = email;
    this._password = password


   // before we had class how we used to define getters and setters:
   //As we already know function is also an object.So we can use its object's property to make get and set.

    Object.defineProperty(this,'email',{ //we don't need to write _email it see itself.
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this,'password',{ //we don't need to write _password it see itself.
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}