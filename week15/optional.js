function findMode(arr) {
  //Start Coding Here
  const modeCount = {}
  arr.map(x => {
    if (!modeCount[x]) {
      modeCount[x] = 1
    } else {
      modeCount[x]++
    }
    return modeCount
  })

  let realMode = 0
  for (const mode in modeCount) {
    if (modeCount[mode] > realMode) {
      realMode = mode
    }
  }
  return realMode
}

let result1 = findMode([1, 2, 2, 3, 3, 3, 4])
console.log(result1) // 3

let result2 = findMode([7, 7, 1, 1, 7])
console.log(result2) // 7

let result3 = findMode([7, 7, 1, 1, 7, 1])
console.log(result3) // 7
