// function that takes in a positive integer targetSum and Array of postive integers
// return the smallest array containing any combo from input array that add up to targetSum

// function bestSum(targetSum, numbers) {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let bestResult = null;

//   for (const num of numbers) {
//     const remainder = targetSum - num;
//     const remainderResult = bestSum(remainder, numbers);
//     if (remainderResult !== null) {
//       result = [...remainderResult, num];
//       if (bestResult === null || result.length < bestResult.length) {
//         bestResult = result;
//       }
//     }
//   }
//   return bestResult;
// }

// optimized with memoization
function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let bestResult = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      result = [...remainderResult, num];
      if (bestResult === null || result.length < bestResult.length) {
        bestResult = result;
      }
    }
  }
  memo[targetSum] = bestResult;
  return bestResult;
}

exports.bestSum = bestSum;
