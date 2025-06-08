function groupAndCalculate(numbers) {
  //Start Coding Here
  const productOfEvenNumbers = numbers
    .filter(number => number % 2 === 0 && number !== 0)
    .reduce((acc, cur) => acc * cur, 1)
  console.log(productOfEvenNumbers)

  const oddSum = numbers
    .filter(number => number % 2 !== 0)
    .reduce((acc, cur) => acc + cur, 0)

  const findZero = numbers.filter(number => number === 0).length

  return {
    even: productOfEvenNumbers,
    odd: oddSum,
    zero: findZero,
  }
}

let result1 = groupAndCalculate([0, 2, 3, 0, 4, 5])
console.log(result1) // { even: 8, odd: 8, zero: 2 }

let result2 = groupAndCalculate([0, 0, 1, 3, 5])
console.log(result2) // { even: 1, odd: 9, zero: 2 }

let result3 = groupAndCalculate([2, 4, 6])
console.log(result3) // { even: 48, odd: 0, zero: 0 }
