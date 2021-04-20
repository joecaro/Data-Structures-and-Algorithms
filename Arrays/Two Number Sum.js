function twoNumberSum(array, targetSum) {
  let nums = {};
  for (const num of array) {
    const potentialNum = targetSum - num;
    if (potentialNum in nums) {
      return [num, potentialNum];
    } else nums[num] = true;
  }
  return [];
}

const test = {
  array: [3, 5, -4, 8, 11, 1, -1, 6],
  targetSum: 10,
};

const answer = twoNumberSum(test.array, test.targetSum);

console.log(answer);
