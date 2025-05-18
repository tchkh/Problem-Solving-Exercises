function isPalindrome(word) {
  //Start Coding Here
  const reverseString = word.split('').reverse().join('')
  if (reverseString === word) {
    return true
  } else {
    return false
  }
}

let result1 = isPalindrome('madam')
console.log(result1) // true

let result2 = isPalindrome('hello')
console.log(result2) // false
