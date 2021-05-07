const { binarySearch } = require("../Searching/binarySearch");

tests = [
  { input: { array: [1, 3, 4, 6, 14, 54, 320], target: 6 }, expected: 3 },
  { input: { array: [1, 3, 4, 6, 14, 54, 320], target: 3 }, expected: 1 },
  { input: { array: [1, 3, 4, 6, 14, 54, 320], target: 45 }, expected: -1 },
];

tests.forEach((test) => {
  result = binarySearch(test.input.array, test.input.target);
  console.log(result === test.expected ? "PASSED √" : "FAILED X");
});
