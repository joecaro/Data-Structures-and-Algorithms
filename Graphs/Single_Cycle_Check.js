function hasSingleCycle(array) {
  let numberOfVisitedElements = 0;
  let currentIdx = 0;

  while (numberOfVisitedElements < array.length) {
    if (numberOfVisitedElements > 0 && currentIdx === 0) return false;
    numberOfVisitedElements++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
