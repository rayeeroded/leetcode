const rotateArray = require('./rotateArray')

test ('example1', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  rotateArray(arr, 3)
  expect(arr).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
})

test ('example2', () => {
  const arr = [-1, -100, 3, 99]
  rotateArray(arr, 2)
  expect(arr).toStrictEqual([3, 99, -1, -100])
})

test('single element array', () => {
  const arr = [-1]
  rotateArray(arr, 2)
  expect(arr).toStrictEqual([-1])
})

test('two elements array with bigger k', () => {
  const arr = [1, 2]
  rotateArray(arr, 3)
  expect(arr).toStrictEqual([2, 1])
})