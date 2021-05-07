function findThreeLargestNumbers(array) {
  let threeLargest = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > threeLargest[0]) {
      threeLargest = insertNum(array[i], threeLargest);
    }
  }
  return threeLargest;
}

function insertNum(num, array) {
  for (let i = 2; i >= 0; i--) {
    if (num > array[i]) {
      array.splice(i + 1, 0, num);
      array.shift();
      return array;
    }
  }
}

exports.findThreeLargestNumbers = findThreeLargestNumbers;
