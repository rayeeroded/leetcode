/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const arr = []
  nums.forEach(num => {
    const i = Math.abs(num)
    if (arr[i] === undefined) {
      arr[i] = 1
    } else {
      arr[i]++
    }
  })

  const res = []
  arr.forEach((occurrences, i) => {
    for (let j = 0 ;j < occurrences ; j++){
      res.push(Math.pow(i, 2))
    }
  })

  return res
}

module.exports = sortedSquares