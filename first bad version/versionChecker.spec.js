const vc = require ('./versionCheck')

test ('4 is first bad', ()=>{
  const isBadVersion = version => (version >= 4) 
  const res = vc(isBadVersion)(5)
  expect(res).toBe(4)
})


test ('4 is first bad, higher range', ()=>{
  const isBadVersion = version => (version >= 4) 
  const res = vc(isBadVersion)(5000)
  expect(res).toBe(4)
})
  

test ('327 is first bad, higher range', ()=>{
  const isBadVersion = version => (version >= 327) 
  const res = vc(isBadVersion)(5001)
  expect(res).toBe(327)
})
    
  
test ('fist bad was last version', ()=>{
  const isBadVersion = version => (version >= 5) 
  const res = vc(isBadVersion)(5)
  expect(res).toBe(5)
})


test ('fist bad was first version', ()=>{
  const isBadVersion = version => (version >= 1) 
  const res = vc(isBadVersion)(5)
  expect(res).toBe(1)
})