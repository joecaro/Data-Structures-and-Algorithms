const { bestSum } = require("../Dynamic_Programming/bestSum");
const { compareArrays } = require("./lib/compareArrays");

tests = [
  {
    targetSum: 10,
    array: [4, 2, 5],
    expected: [5, 5],
  },
  {
    targetSum: 10,
    array: [3, 5],
    expected: [5, 5],
  },
  {
    targetSum: 10,
    array: [],
    expected: null,
  },
  {
    targetSum: 11,
    array: [3, 5],
    expected: [5, 3, 3],
  },
];

function testFunc(test) {
  const userResult = bestSum(test.targetSum, test.array);
  const expectedResult = test.expected;
  if (expectedResult === null) {
    if (userResult === null) {
      return {
        result: true,
        userResult: userResult,
        expectedResult: expectedResult,
      };
    }
    return {
      result: false,
      userResult: userResult,
      expectedResult: expectedResult,
    };
  }
  const result = compareArrays(userResult, expectedResult);
  return {
    result: result,
    userResult: userResult,
    expectedResult: expectedResult,
  };
}

tests.forEach((test) => {
  let { result, userResult, expectedResult } = testFunc(test);
  console.log(
    result
      ? "PASSED √"
      : `FAILED X -- Expected: ${expectedResult} -- returned ${userResult}`
  );
});
