/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let localMax = 0
  let totalMax = Number.NEGATIVE_INFINITY

  for (let i = 0 ; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i] )
    if (totalMax < localMax) {
      totalMax = localMax
    }
  }

  return totalMax
}

module.exports = maxSubArray