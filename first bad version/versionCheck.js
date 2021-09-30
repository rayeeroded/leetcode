/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    //from a - maybe good version (perhaps none was good)
    //to a b - bad version (there was at least one bad)
    //find the first bad one
    return helper (1, n)
  }

  function helper (a, b) {
    if (a === 1 && isBadVersion(a)) {
      return 1
    }
    //if 'a' is good and the following is bad -
    // we found the first bad one
    if (a + 1 === b) {
      if (!isBadVersion(a) && isBadVersion(b)) {
        return b
      }
    }

    // check a version in the middle, and iterate the range
    let i = Math.floor((a + b) / 2)
    if (isBadVersion(i)) {
      b = i
    } else {
      a = i
    }
    return helper(a, b)      
  }
}

module.exports = solution