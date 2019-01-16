/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
   if(someNum & 1 == 1) {
        return false;
   } else {
       return true;
   }
}

for(let i = 0; i < 500; i++) {
    console.log(isEven(i));
}