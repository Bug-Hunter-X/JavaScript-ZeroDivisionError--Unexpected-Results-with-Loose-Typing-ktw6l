function foo(a,b){    if (a === 0 || b === 0) {        return 0;    }    return a / b;}

console.log(foo(0,0)); //This will return 0, as expected.
console.log(foo(1,0)); //This will return Infinity, as expected.
console.log(foo(0,1)); //This will return 0, as expected.
console.log(foo(1,1)); //This will return 1, as expected.