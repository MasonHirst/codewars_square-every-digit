//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

function squareDigits(num) {
   let numStr = num.toString()
   let digitsArr = numStr.split('')

   let digits = digitsArr.map((digit) => {
      let numSqrd = +digit * +digit
      return numSqrd
   })

   return +digits.join('')
}

console.log(squareDigits(9119))
console.log(squareDigits(3224))
console.log(squareDigits(3224))
console.log(squareDigits(0))


