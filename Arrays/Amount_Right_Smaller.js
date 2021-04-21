function rightSmallerThan(array) {
  for (let i = 0; i < array.length; i++) {
    let amountSmaller = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) amountSmaller++;
    }
    array[i] = amountSmaller;
  }
  return array;
}

exports.rightSmallerThan = rightSmallerThan;
