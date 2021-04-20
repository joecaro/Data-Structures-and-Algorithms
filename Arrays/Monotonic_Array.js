function isMonotonic(array) {
  if (array.length <= 2) return true;
  let direction;
  let idx;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      direction = "non-increasing";
      idx = i;
      break;
    }
    if (array[i] > array[i - 1]) {
      direction = "non-decreasing";
      idx = i;
      break;
    }
  }

  if (direction === "non-decreasing") {
    for (let i = idx; i < array.length; i++) {
      if (array[i] < array[i - 1]) return false;
    }
  } else
    for (let i = idx; i < array.length; i++) {
      if (array[i] > array[i - 1]) return false;
    }

  return true;
}
