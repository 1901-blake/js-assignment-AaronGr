/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let someStrArray = someStr.split("");
    let reverseStrArray = someStrArray.reverse();
    let reverseStr = reverseStrArray.join("")

    return reverseStr;
}

console.log(reverseStr("potato"));