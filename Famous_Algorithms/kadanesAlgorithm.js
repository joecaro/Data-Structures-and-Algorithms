function kadanesAlgorithm(array) {
  maxEndingHere = -Infinity;
  maxSoFar = -Infinity;
  for (const num of array) {
    maxEndingHere = Math.max(maxEndingHere + num, num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

exports.kadanesAlgorithm = kadanesAlgorithm;
