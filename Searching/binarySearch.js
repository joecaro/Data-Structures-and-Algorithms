function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  let middle = Math.floor((right + left) / 2);
  let possibleMatch = array[middle];
  if (possibleMatch === target) return middle;
  if (possibleMatch < target)
    return binarySearchHelper(array, target, middle + 1, right);
  if (possibleMatch > target)
    return binarySearchHelper(array, target, left, middle - 1);
}

exports.binarySearch = binarySearch;
