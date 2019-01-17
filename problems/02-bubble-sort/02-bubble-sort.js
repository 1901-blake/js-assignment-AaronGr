/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    for(let i = 0; i < numArray.length; i++) {
        for(let j = 0; j < i; j++) {
            if(numArray[i] < numArray[j]) {
                let lowerNum = numArray[j];
                numArray[j] = numArray[i];
                numArray[i] = lowerNum;
            }
        }
    }

    return numArray;
}

let testArray = [3, 5, 1, 8, 20, 6, 4];
let testArray2 = [1, 2, 3, 4, 5, 6 , 7];
let testArray3 = testArray2.reverse();
console.log(bubbleSort(testArray));
console.log(bubbleSort(testArray2));
console.log(bubbleSort(testArray3));