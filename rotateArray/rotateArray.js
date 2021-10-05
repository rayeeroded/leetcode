/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  rotate2 (nums, k)
}

function rotate2 (nums, k) {
  if (nums.length <= 1) {
    return
  }

  k = k % nums.length  
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}

function reverse (arr, a, b) {
  let tmp
  while (a < b){
    tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
    a++
    b--
  }
}


//-------------------naive attempt too slow--------
function rotate1 (nums, k) {
  for (let i = 0; i < k ; i++){
    rotateRight(nums)
  }
}
function rotateRight (arr) {
  if (arr.length <= 1) {
    return
  }
  let a = arr[0]
  arr[0] = arr[arr.length - 1]
  let b = arr[1]
  for (let i = 1 ; i < arr.length; i++){
    arr[i] = a
    a = b 
    b = arr[i + 1]
  }
}
//-----------------------------------------------------
module.exports = rotate