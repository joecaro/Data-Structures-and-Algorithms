const {
  maxSubsetSumNoAdjacent,
} = require("../Dynamic_Programming/maxSubsetSumNoAdjacent");

tests = [
  {
    input: [],
    expected: 0,
  },
  {
    input: [1, 2, 3, 4, 5],
    expected: 9,
  },
  {
    input: [5, 6, 14, 5, 12],
    expected: 31,
  },
  {
    input: [8, 17, 1, 6, 10],
    expected: 27,
  },
  {
    input: [7, 8, 12, 46, 21, 8, 1, 45],
    expected: 107,
  },
  {
    input: [1, 105, 546, 1, 54, 6, 4, 81],
    expected: 682,
  },
];

tests.forEach((test) => {
  result = maxSubsetSumNoAdjacent(test.input);
  console.log(result === test.expected ? "PASSED √" : "FAILED X");
});
