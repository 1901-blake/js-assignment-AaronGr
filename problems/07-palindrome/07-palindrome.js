/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  let someStrArray = someStr.split("");
  let reverseStrArray = someStrArray.reverse();
  let reverseStr = reverseStrArray.join("")

  if(someStr == reverseStr) {
      return true;
  } else {
      return false;
  }
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));