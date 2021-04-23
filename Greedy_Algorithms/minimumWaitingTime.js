function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let waitingTime = 0;
  for (let i = 0; i < queries.length - 1; i++) {
    let duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    waitingTime += duration * queriesLeft;
  }
  return waitingTime;
}

exports.minimumWaitingTime = minimumWaitingTime;
