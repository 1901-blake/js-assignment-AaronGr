/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if( n === 0 || n === 1) {
        return 0;
    } else if( n === 2) {
        return 1;
    }

    let num1 = 0;
    let num2 = 1;
    let nextNum = 0;
    for(let i = 2; i < n; i++) {
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }

    return nextNum;
}

for(let j = 1; j < 20; j++) {
    console.log(fib(j)); git 
}