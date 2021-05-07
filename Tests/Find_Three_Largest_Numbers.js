const { findThreeLargestNumbers } = require("../Searching/threeLargestNumbers");
const { compareArrays } = require("./lib/compareArrays");

tests = [
  {
    input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7],
    expected: [18, 141, 541],
  },
  {
    input: [55, 7, 8, 3, 43, 11],
    expected: [11, 43, 55],
  },
  {
    input: [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7],
    expected: [-2, -1, 7],
  },
];

tests.forEach((test) => {
  answer = findThreeLargestNumbers(test.input);
  let result = compareArrays(answer, test.expected);
  console.log(result ? "PASSED √" : "FAILED X");
});
