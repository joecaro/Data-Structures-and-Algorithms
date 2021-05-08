const {
  dijkstrasAlgorithm,
} = require("../Famous_Algorithms/dijkstrasAlgorithm");

test = {
  start: 0,
  edges: [
    [[1, 7]],
    [
      [2, 6],
      [3, 20],
      [4, 3],
    ],
    [[3, 14]],
    [[4, 2]],
    [],
    [],
  ],
};

console.log(dijkstrasAlgorithm(test.start, test.edges));
