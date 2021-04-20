function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayOne.sort((a, b) => a - b);

  let onePointer = 0;
  let twoPointer = 0;
  let currentBestNumber;
  let currentBestPair = [];
  while (onePointer < arrayOne.length && twoPointer < arrayTwo.length) {
    let one = arrayOne[onePointer];
    let two = arrayTwo[twoPointer];
    let difference = Math.abs(one - two);
    if (difference === 0) {
      currentBestPair = [one, two];
      currentBestNumber = 0;
    } else if (difference < currentBestNumber || !currentBestNumber) {
      currentBestPair = [one, two];
      currentBestNumber = 0;
    }
    one > two ? twoPointer++ : onePointer++;
  }
  return currentBestPair;
}
