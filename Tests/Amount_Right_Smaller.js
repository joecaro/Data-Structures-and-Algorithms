const { rightSmallerThan } = require("../Arrays/amountRightSmaller");

tests = [
  { array: [8, 5, 11, -1, 3, 4, 2], answer: [5, 4, 4, 0, 1, 1, 0] },
  { array: [], answer: [] },
  { array: [1], answer: [0] },
];

function testArray(obj) {
  rightSmallerThan(obj.array).forEach((element, index) => {
    if (element !== obj.answer[index]) return false;
  });
  return true;
}

for (let test of tests) {
  console.log(testArray(test) ? "PASSED √" : "FAILED X");
}
