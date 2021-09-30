const bs = require('./bs')

test('middle index', () => {
  const res = bs([-1, 0, 3, 5, 9, 12], 9)
  expect(res).toBe(4)
})

test('last index', () => {
  const res = bs([-1, 0, 3, 5, 9, 12], 12)
  expect(res).toBe(5)
})

test('first index', () => {
  const res = bs([-1, 0, 3, 5, 9, 12], -1)
  expect(res).toBe(0)
})