/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if(sumNum == 0 || sumNum == 1) {
        return 1;
    }
    
    return sumNum * factorial(sumNum - 1);
}

for(let i = 0; i < 20; i++) {
    console.log(factorial(i));
}