/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    for(let i = 0; i < numArray.length; i++) {
        for(let j = 1; j < numArray.length; j++) {
            if(numArray[i] > numArray[j]) {
                let lowerNum = numArray[j];
                numArray[j] = numArray[i];
                numArray[i] = lowerNum;
            }
        }
    }

    return numArray;
}

let testArray = [3, 5, 1, 8, 20, 6, 4];
console.log(bubbleSort(testArray));