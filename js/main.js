/*
	Code is written like shit.
	I'm still going to clean up this code another time!
*/

import ScoreboardView from "./ScoreboardView.js";

const inputBox = document.querySelector("#inputBox");
const timer = document.querySelector("#timer");

let playerOneScore=0, playerTwoScore=0;
let playerOneName=document.querySelector("#teamOneDrop"), playerTwoName=document.querySelector("#teamTwoDrop");	

// The id that will contain all the css stuff
const root = document.querySelector("#scoreboard");
let view = new ScoreboardView(root, playerOneName, playerTwoName, (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + difference, 0);
		if(difference == 1) {
			console.log("TEAM ONE SCORED 1 GOAL!");
			inputBox.textContent += timer.textContent + " - " + playerOneName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		} else if(difference == -1) {
			console.log("TEAM ONE GOT A GOAL REVOKED!");
			inputBox.textContent += timer.textContent + " - " + playerOneName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		}
	} else if(player === "two"){
		playerTwoScore = Math.max(playerTwoScore + difference, 0);
		if(difference == 1) {
			console.log("TEAM TWO SCORED 1 GOAL!");
			inputBox.textContent += timer.textContent + " - " + playerTwoName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		} else if(difference == -1) {
			console.log("TEAM TWO GOT A GOAL REVOKED!");
			inputBox.textContent += timer.textContent + " - " + playerTwoName + " (" + playerOneScore + "-" + playerTwoScore + ")\n"
		}
	}
	

	view.update(playerOneScore, playerTwoScore);
})

$("#teamOneDrop").on("change", function () {
    upd();
});
$("#teamTwoDrop").on("change", function () {
    upd();
});

playerOneName = document.querySelector("#teamOneDrop").value;
playerTwoName = document.querySelector("#teamTwoDrop").value;
function upd () {
	var interval = setInterval(() => {
		playerOneName = document.querySelector("#teamOneDrop").value;
		playerTwoName = document.querySelector("#teamTwoDrop").value;
		names.innerHTML = `
				<div class="scoreboard">
					<div class="scoreboard__name scoreboard__name--one">${playerOneName}</div>
					<div class="scoreboard__name scoreboard__name--two">${playerTwoName}</div>
				</div>
						`;
		clearInterval(interval);
	}, 10);
}
upd();