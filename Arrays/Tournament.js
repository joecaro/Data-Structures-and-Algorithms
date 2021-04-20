function tournamentWinner(competitions, results) {
  let teamPoints = {};
  competitions.forEach((competition, index) => {
    let homeOrAway = results[index] === 0 ? 1 : 0;
    let winner = competition[homeOrAway];
    if (!(winner in teamPoints)) {
      teamPoints[winner] = 3;
    } else teamPoints[winner] = teamPoints[winner] + 3;
  });

  let teamNames = Object.keys(teamPoints);
  let points = Object.values(teamPoints);
  let maxPoints = points.indexOf(Math.max(...points));

  let winningTeam = teamNames[maxPoints];

  return winningTeam;
}
