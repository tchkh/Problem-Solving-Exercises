function reverseString(text) {
  //Start Coding Here
  return text.split('').reverse().join('')
}

let result1 = reverseString('hello')
console.log(result1) // "olleh"

let result2 = reverseString('TechUp')
console.log(result2) // "pUhceT"
