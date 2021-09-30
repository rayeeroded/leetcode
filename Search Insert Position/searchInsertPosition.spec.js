const sip = require('./searchInsertPosition')

test ('example1', () => {
  const res = sip([1, 3, 5, 6], 5)
  expect(res).toBe(2)
})

test ('example2', () => {
  const res = sip([1, 3, 5, 6], 2)
  expect(res).toBe(1)
})

test ('example3', () => {
  const res = sip([1, 3, 5, 6], 7)
  expect(res).toBe(4)
})

test ('example4', () => {
  const res = sip([1, 3, 5, 6], 0)
  expect(res).toBe(0)
})

test ('example5', () => {
  const res = sip([1], 0)
  expect(res).toBe(0)
})
// ----------------------------------
test('bigger array', () => {
  const res = sip([1, 6, 7, 8, 400, 500, 501, 502, 503], 6)
  expect(res).toBe(1)
})

test('in the middle', () => {
  const res = sip([1, 2, 3, 4, 5], 3)
  expect(res).toBe(2)
})

test('in the middle smaller but after larger', () => {
  const res = sip([0, 1, 2, 4, 5], 3)
  expect(res).toBe(3)
})

describe('array with 2 elements', () => {
  test('match first', () => {
    const res = sip([0, 1], 0)
    expect(res).toBe(0)
  }) 
  test('match second', () => {
    const res = sip([0, 1], 1)
    expect(res).toBe(1)
  })    

  test('higher than second', () => {
    const res = sip([0, 1], 2)
    expect(res).toBe(2)
  })

  test('smaller than first', () => {
    const res = sip([0, 1], -1)
    expect(res).toBe(0)
  })
})

