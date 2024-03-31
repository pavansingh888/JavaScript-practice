// const tinderUser = new Object() //{} - singleton object
const tinderUser = {} //{} Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sandy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "pavan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pavan",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //Pavan

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } //first obj is target so always use it - all will be source.

obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //will give all the keys of given object returning in an array
// console.log(Object.values(tinderUser)); //will give all the values of given object returning in an array
console.log(Object.entries(tinderUser)); //return array containing each key-value in an array itself  //[ [ 'id', '123abc' ], [ 'name', 'Sandy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Pavan"
}

// course.courseInstructor

// const {courseInstructor} = course 
const {courseInstructor: instructor} = course //we can give instructor as another name

// console.log(courseInstructor);
console.log(instructor); //Pavan

// {
//     "name": "Pavan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]