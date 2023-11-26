console.log("This is correct")// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;




// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log('The sum is 50')

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log('at least two numbers are odd')

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log('no number is larger than 25')

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log('all numbers are unique')

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);
console.log('all good to go')

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  /**
   * 
   * Part 1
   * 
   */

// Check if all numbers are divisible by 5 
const isN1DivisibleBy5 = n1 % 5 === 0;
const isN2DivisibleBy5 = n2 % 5 === 0;
const isN3DivisibleBy5 = n3 % 5 === 0;
const isN4DivisibleBy5 = n4 % 5 === 0;

// Cache the results in variables
const allNumbersDivisibleBy5 = isN1DivisibleBy5 && isN2DivisibleBy5 && isN3DivisibleBy5 && isN4DivisibleBy5;

console.log(allNumbersDivisibleBy5);
console.log('divide by 5 is alive')

// Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;

// Cache the result in a variable
console.log(isFirstLargerThanLast);
console.log('the first is bigger than the last')

// Subtract the first number from the second number
const subtractionResult = n2 - n1;

// Multiply the result by the third number
const multiplicationResult = subtractionResult * n3;

// Find the remainder of dividing the result by the fourth number
const remainderResult = multiplicationResult % n4;

console.log(remainderResult);

// Check if any of the numbers is over 25
const isAnyOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

console.log(isAnyOver25);


/**
 * 
 * 
 * Part 2
 * 
 */

