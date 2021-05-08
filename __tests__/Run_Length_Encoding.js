const { runLengthEncoding } = require("../Strings/runLengthEncoding");

test("Test Case #1", () => {
  const string = "AAAAAAAAAAAAABBCCCCDD";
  const expected = "9A4A2B4C2D";
  const actual = runLengthEncoding(string);
  expect(actual).toBe(expected);
});
