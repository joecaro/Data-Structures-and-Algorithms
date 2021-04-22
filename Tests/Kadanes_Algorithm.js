const { kadanesAlgorithm } = require("../Famous_Algorithms/kadanesAlgorithm");

tests = [
  {
    input: [1, 4, 2, -2, 4, 2, -10, 5, -2, 1, 1, 1],
    expected: 11,
  },
  {
    input: [1, 4, 2, -6, 1, 1, 1],
    expected: 7,
  },
  {
    input: [-1, -5, -2],
    expected: -1,
  },
];

tests.forEach((test) => {
  result = kadanesAlgorithm(test.input);
  console.log(result === test.expected ? "PASSED √" : "FAILED X");
});
