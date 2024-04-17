const myNums = [1,2,3]

const myTotal = myNums.reduce(function (accumulator,currval){
//   console.log(`Accumulator: ${accumulator}, Current value: ${currval}`)
  return accumulator+currval;  // this value will be accumulator for next array element - USE CASE: Total price in shopping cart.
},0)

// console.log(myTotal);

// Accumulator: 0, Current value: 1
// Accumulator: 1, Current value: 2
// Accumulator: 3, Current value: 3
// 6

const shoppingCart = [
    {
        item: "item1",
        price: 2999
    },
    {
        item: "item1",
        price: 999,
    },
    {
        item: "item1",
        price: 5999
    },
    {
        item: "item1",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,itm) => acc+itm.price ,0 )

console.log(priceToPay); //22996