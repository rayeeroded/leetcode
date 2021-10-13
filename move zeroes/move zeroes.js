/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroCount = 0
  let curPos = 0
  for (let i = 0 ; i < nums.length ; i++) {
    if(nums[i] === 0) {
      zeroCount++
    } else {
      nums[curPos] = nums[i]
      curPos++
    }
  }

  for (let i = 0 ; i < zeroCount ; i++) {
    nums[curPos + i] = 0
  }
}

module.exports = moveZeroes