const { getNthFib } = require("../Recursion/nthFibinacci");

tests = [
  {
    input: 1,
    expected: 0,
  },
  {
    input: 2,
    expected: 1,
  },
  {
    input: 4,
    expected: 1,
  },
  {
    input: 8,
    expected: 13,
  },
];

tests.forEach((test, index) => {
  console.log(
    getNthFib(test.input) === test.expected ? "PASSED √" : "FAILED X"
  );
});
