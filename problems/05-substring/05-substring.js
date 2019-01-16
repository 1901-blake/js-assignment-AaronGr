/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(typeof(someStr) !== "string") {
        throw new TypeError(`${someStr} is not a string.`)
    }

    if(typeof(startIndex) !== "number") {
        throw new TypeError(`${startIndex} is not a number.`)
    }

    if(typeof(endIndex) !== "number") {
        throw new TypeError(`${endIndex} is not a number.`)
    }

    if(startIndex < 0 || startIndex >= someStr.length ) {
           throw new RangeError(`${startIndex} is out of bounds.`)
       }

    if(endIndex < 0 || endIndex > someStr.length) {
        throw new RangeError(`${endIndex} is out of bounds.`)
    }

    if(startIndex > endIndex) {
        throw new RangeError('End index must be equal or higher to start index');
    }

    //TODO check for empty string
    //TODO check for startIndex = endIndex

    return someStr.substr(startIndex, endIndex);
}

console.log(substring('hello', 0, 1));