function getNthFib(n, memo = {}) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let number = getNthFib(n - 1) + getNthFib(n - 2);

  memo[n] = number;
  return number;
}

exports.getNthFib = getNthFib;
