// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //PI is our property name, its value is 3.14... So we need to provide property name of the object to get its description.
console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const tea= {
    name: 'ginger tea',
    price: 250,
    isAavailable: true,

    orderTea: function(){
        console.log("Tea not made");
    }
}

console.log(Object.getOwnPropertyDescriptor(tea));//undefined
console.log(Object.getOwnPropertyDescriptor(tea,'name'));
// {
//     value: 'ginger tea',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(tea,'name',{  //not properties because we are defining only one property.
    // writable: false,
    enumerable: false

//     price:250
// isAavailable:true
})

console.log(Object.getOwnPropertyDescriptor(tea,'name'));
// {
//     value: 'ginger tea',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (let [key,value] of Object.entries(tea)){  // TypeError: tea is not iterable - so we use object.entries()
    if(typeof value !=='function'){
       console.log(`${key}:${value}`); 
    }
    
    // name:ginger tea
    // price:250
    // isAavailable:true

    //when method is also added to object:we use if()
//     name:ginger tea
// price:250
// isAavailable:true
// orderTea:function(){
//         console.log("Tea not made");
//     }
}