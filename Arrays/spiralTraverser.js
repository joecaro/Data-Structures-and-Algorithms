function spiralTraverse(array) {
  let results = [];

  let startRow = 0,
    endRow = array.length - 1;
  let startColumn = 0,
    endColumn = array[0].length - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let col = startColumn; col <= endColumn; col++) {
      results.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      results.push(array[row][endColumn]);
    }
    for (let col = endColumn - 1; col >= startColumn; col--) {
      if (startRow === endRow) break;
      results.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startColumn === endColumn) break;
      results.push(array[row][startColumn]);
    }
    startRow++;
    startColumn++;
    endRow--;
    endColumn--;
  }

  return results;
}
