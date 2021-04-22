const { canSum } = require("../Dynamic_Programming/canSum");

tests = [
  {
    targetSum: 10,
    array: [1, 4, 2, 5],
    expected: true,
  },
  {
    targetSum: 10,
    array: [],
    expected: false,
  },
  {
    targetSum: 10,
    array: [7],
    expected: false,
  },
  {
    targetSum: 10,
    array: [1, 5],
    expected: true,
  },
  {
    targetSum: 10,
    array: [3, 7, 8, 5],
    expected: true,
  },
  {
    targetSum: 300,
    array: [7, 14],
    expected: false,
  },
];

tests.forEach((test) => {
  console.log(
    canSum(test.targetSum, test.array) === test.expected
      ? "PASSED √"
      : "FAILED X"
  );
});
