// given a target sum & an array of numbers,
// write a function that determines if any combination of numbers
// in the input array can sum to the targetSum.
// Numbers in the input array may be used more than once
// ex. targetSum = 8, array = [2, 3, 5] : true
//     possible sums [2, 2, 2, 2], [2, 3, 3], [3, 5]

function canSum(targetSum, array, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of array) {
    newTargetSum = targetSum - num;
    const canSumResult = canSum(newTargetSum, array, memo);
    if (canSumResult === true) {
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

exports.canSum = canSum;
