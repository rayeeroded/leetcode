const mz = require('./move zeroes')

test ('example1', () => {
  const arr = [0, 1, 0, 3, 12]
  mz(arr)
  expect(arr).toStrictEqual([1, 3, 12, 0, 0])
})

test ('example2', () => {
  const arr = [0]
  mz(arr)
  expect(arr).toStrictEqual([0])
})