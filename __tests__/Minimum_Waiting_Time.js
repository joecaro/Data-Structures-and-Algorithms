const {
  minimumWaitingTime,
} = require("../Greedy_Algorithms/minimumWaitingTime");

tests = [
  {
    input: [3, 5, 2, 6, 1],
    expected: 21,
  },
  {
    input: [17, 5, 2, 7, 1, 5],
    expected: 45,
  },
  {
    input: [1, 5, 9, 3, 2],
    expected: 21,
  },
  {
    input: [1],
    expected: 0,
  },
];

tests.forEach((test) => {
  console.log(
    minimumWaitingTime(test.input) === test.expected ? "PASSED √" : "FAILED X"
  );
});
