const sortedSquares = require('./squaresSortedArray')

test ('example1', () => {
  const res = sortedSquares([-4, -1, 0, 3, 10])
  expect(res).toStrictEqual([0, 1, 9, 16, 100])
})

test ('example2', () => {
  const res = sortedSquares([-7, -3, 2, 3, 11])
  expect(res).toStrictEqual([4, 9, 9, 49, 121])
})