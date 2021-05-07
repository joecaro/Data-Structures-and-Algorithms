const { selectionSort } = require("../Sorting/selectionSort");
const { compareArrays } = require("./lib/compareArrays");

tests = [
  {
    input: [5, 2, 3, 1, 4],
    expected: [1, 2, 3, 4, 5],
  },
  {
    input: [5, 4, 1, 2, 3],
    expected: [1, 2, 3, 4, 5],
  },
  {
    input: [1, 3, 2],
    expected: [1, 2, 3],
  },
];

tests.forEach((test) => {
  answer = selectionSort(test.input);
  let result = compareArrays(answer, test.expected);
  console.log(result ? "PASSED √" : "FAILED X");
});
