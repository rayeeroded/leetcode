const maxSubArraySum = require('./maSubSum')

test ('example1', () => {
  const res = maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])  
  expect(res).toStrictEqual(6)
})

test ('example2', () => {
  const res = maxSubArraySum([1])  
  expect(res).toStrictEqual(1)
})

test('example3', () => {
  const res = maxSubArraySum([5, 4, -1, 7, 8])  
  expect(res).toStrictEqual(23)
})