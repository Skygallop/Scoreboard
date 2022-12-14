import ScoreboardView from "./ScoreboardView.js";

const inputBox = document.querySelector("#inputBox");
const timer = document.querySelector("#timer");

let playerOneScore=0, playerTwoScore=0;
let playerOneName="TEAM ONE", playerTwoName="TEAM TWO";

// The id that will contain all the css stuff
const root = document.querySelector("#scoreboard");
let view = new ScoreboardView(root, playerOneName, playerTwoName, (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + difference, 0);
		if(difference == 1) {
			console.log("TEAM ONE SCORED 1 GOAL!");
			// alert("TEAM ONE SCORED!")
			inputBox.textContent += timer.textContent + " - " + playerOneName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		} else if(difference == -1) {
			console.log("TEAM ONE GOT A GOAL REVOKED!");
			// alert("TEAM ONE SCORED!")
			inputBox.textContent += timer.textContent + " - " + playerOneName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		}
	} else {
		playerTwoScore = Math.max(playerTwoScore + difference, 0);
		if(difference == 1) {
			console.log("TEAM TWO SCORED 1 GOAL!");
			// alert("TEAM ONE SCORED!")
			inputBox.textContent += timer.textContent + " - " + playerTwoName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		} else if(difference == -1) {
			console.log("TEAM TWO GOT A GOAL REVOKED!");
			// alert("TEAM ONE SCORED!")
			inputBox.textContent += timer.textContent + " - " + playerTwoName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		}
	}

	view.update(playerOneScore, playerTwoScore);
})