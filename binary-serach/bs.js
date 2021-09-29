/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let a = 0, b = nums.length - 1
  return binarySearch(nums, a , b, target)
}

function binarySearch(nums, a , b, target) {
  let i = Math.floor((a+b) / 2)
     
  if (nums[i] === target) {
    return i
  } 
  else if (a >= b) {
    return -1
  }
  else if (nums[i] > target) {
    b = i -1 
  }
  else if (nums[i] < target) {
    a = i + 1
  }
    
  return binarySearch(nums, a , b, target)
}

module.exports = search