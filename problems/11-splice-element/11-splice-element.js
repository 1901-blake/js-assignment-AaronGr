/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let singleObjArr = someArr.splice(index,1);
    return singleObjArr[0];
}

let testArr = ['apple','banana','orange',2, 6];
console.log(spliceElement(testArr, 3));
console.log(testArr);