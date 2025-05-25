function countVowels(text) {
  //Start Coding Here
  const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
  const textToArray = text.split('')

  let count = 0
  textToArray.filter(x => {
    if (vowels.includes(x)) return count++
  })
  return count
}

let result1 = countVowels('hello')
console.log(result1) // 2

let result2 = countVowels('TECHUP')
console.log(result2) // 2
