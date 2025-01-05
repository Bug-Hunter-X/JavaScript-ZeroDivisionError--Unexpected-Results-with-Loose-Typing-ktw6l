function foo(a,b){    if (b === 0) {        throw new Error("Division by zero");    }    if (a === 0 || b === 0) {        return 0;    }    return a / b;}

console.log(foo(0,0)); //Throws an error
console.log(foo(1,0)); //Throws an error
console.log(foo(0,1)); //This will return 0, as expected
console.log(foo(1,1)); //This will return 1, as expected.