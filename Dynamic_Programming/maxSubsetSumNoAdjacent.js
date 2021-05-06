function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  //create shallow copy so we don't mutate array
  const maxSums = array.slice();
  maxSums[1] = Math.max(maxSums[0], maxSums[1]);
  //find max
  for (let i = 2; i < maxSums.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i] + maxSums[i - 2]);
  }

  return maxSums[maxSums.length - 1];
}

exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
