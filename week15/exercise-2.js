function sumEvenNumbers(numbers) {
  //Start Coding Here
  let sumEven = 0
  numbers.map(number => {
    if (number % 2 === 0) {
      sumEven += number
    }
    return sumEven
  })
  return sumEven
}

let result1 = sumEvenNumbers([1, 2, 3, 4])
console.log(result1) // 6

let result2 = sumEvenNumbers([7, 11, 20, 8])
console.log(result2) // 28
