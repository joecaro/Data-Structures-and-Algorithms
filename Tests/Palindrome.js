const { isPalindrome } = require("../strings/palindromeCheck");

const tests = [
  { string: "abcba" },
  { string: "ab" },
  { string: "aba" },
  { string: "abba" },
  { string: "abbca" },
  { string: "abacaba" },
];

const expected = [
  { string: true },
  { string: false },
  { string: true },
  { string: true },
  { string: false },
  { string: true },
];

tests.forEach((test, index) => {
  console.log(
    isPalindrome(test.string) === expected[index].string
      ? "PASSED √"
      : "FAILED X"
  );
});
