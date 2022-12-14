import ScoreboardView from "./ScoreboardView.js";

let playerOneScore = 0;
let playerTwoScore = 0;
// The id that will contain all the css stuff
const root = document.querySelector("#scoreboard");
let view = new ScoreboardView(root, "Player One", "Player Two", (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + difference, 0);
	} else {
		playerTwoScore = Math.max(playerTwoScore + difference, 0);
	}

	view.update(playerOneScore, playerTwoScore);
})