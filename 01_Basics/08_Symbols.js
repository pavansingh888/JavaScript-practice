const symbol1 = Symbol('foo');
const symbol2 = Symbol('foo');
console.log(symbol1 === symbol2); // false


/*Symbol Registry: Symbols can be stored in a global symbol registry to ensure that symbols with the same description refer to the same symbol value. This can be achieved using the Symbol.for() and Symbol.keyFor() methods. Example:*/

const symbol3 = Symbol.for('foo');
const symbol4 = Symbol.for('fooo');
console.log(symbol3);
console.log(symbol4);
console.log(symbol3 === symbol4); // true
console.log(Symbol.keyFor(symbol3)); // 'foo'
console.log(Symbol.keyFor(symbol4));


const mySymbol = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');
const mySymbol3 = Symbol('mySymbol');

const obj = {
    [Symbol()] : "value4"
};

console.log(obj);

obj[mySymbol] = 'value1';
obj[mySymbol2] = 'value2';
obj[mySymbol3] = 'value3';
console.log(obj);

// console.log(obj.[Symbol()]); //error - Unexpected token '['
console.log(obj[mySymbol2]); //value2 - correct way to access symbol in object.
// console.log(obj.mySymbol2); //undefined


//=======================================================================

const obj0 = {
    [Symbol('symbol1')]: 'value111',
    [Symbol('symbol2')]: 'value222'
};

const symbols = Object.getOwnPropertySymbols(obj0);
symbols.forEach(symbol => {
    console.log(obj0[symbol]); // Logs the values associated with each symbol
});