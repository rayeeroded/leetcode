module.exports.triangle = (height, numDollars, numSpaces) => {
  const columns = (2 * height) - 1
  let a = Math.floor(columns / 2)
  let b = a

  let spacesUsed = 0
  let dollarsUsed = 0
  let useDollar = true
  for (let i = 0 ; i < height; i++) {
    for(let j = 0 ; j < columns; j++) {
      //in last row just print *
      if (i === height - 1) {
        process.stdout.write('*')
        continue
      }
      //print something if in range
      if (j >= a && j <= b) {
        // if it's an edge -print *
        if (j === a || j === b) {
          process.stdout.write('*')
        } else { // not an edge - print either space or $
          // support 0 input - if no dollars are required just print space
          if (numDollars === 0 ) {
            process.stdout.write(' ')
            continue
          }
          // print based on a boolean and revert when needed
          if (useDollar) {
            if (dollarsUsed < numDollars) {
              process.stdout.write('$')
              dollarsUsed++
              if (dollarsUsed === numDollars) {
                useDollar = false
                dollarsUsed = 0
              }
            }    
          } else { //using spaces
            if (spacesUsed < numSpaces) {
              process.stdout.write(' ')
              spacesUsed++
            }
            if (spacesUsed === numSpaces) {
              useDollar = true
              spacesUsed = 0
            }
          }
        }
      } else { //if not in range print space
        process.stdout.write(' ')
      }
    }//end j
    process.stdout.write('\n') //newline
    //increase printed range in next row
    a--
    b++
  }//end i
}

module.exports.triangle(9, 5, 2)