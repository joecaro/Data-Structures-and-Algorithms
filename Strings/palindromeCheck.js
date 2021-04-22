function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx <= rightIdx) {
    if (string.charAt(leftIdx) !== string.charAt(rightIdx)) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

exports.isPalindrome = isPalindrome;
