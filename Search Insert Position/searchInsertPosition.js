/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return helper(0, nums.length - 1, nums, target)
}

function helper (a, b, nums, target) {
  if (nums[a] > target) {
    return a
  }
  if (nums[b] < target) {
    return b + 1
  }
  
  const i = Math.floor((a + b) / 2)
  if (nums[i] === target) {
    return i
  } else if (nums[i] > target) {
    if (nums[i - 1] < target) {
      return i
    }
    b = i - 1
  } else { // now nums[i] < target
    if (nums[i + 1] > target) {
      return i + 1
    }
    a = i + 1
  }
  return helper(a, b, nums, target)
}

module.exports = searchInsert