function findMax(nums) {
  //Start Coding Here
  let max
  for (let i = 0; i < nums.length; i++) {
    if (!max) {
      max = nums[i]
    }

    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return max
}

let result1 = findMax([1, 9, 3, 5])
console.log(result1) // 9

let result2 = findMax([-10, -5, -2])
console.log(result2) // -2
