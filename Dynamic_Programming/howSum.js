// function that takes in a positive integer targetSum and Array of postive integers
// return an array containing any combo from input array that add up to targetSum
// if multiple answers, return any

// non-optimized

// function howSum(targetSum, numbers) {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderResult = howSum(remainder, numbers);
//     if (remainderResult !== null) {
//       return [...remainderResult, num];
//     }
//   }

//   return null;
// }

// optimized with memoization
function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

exports.howSum = howSum;
