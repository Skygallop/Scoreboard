import ScoreboardView from "./Scoreboard/ScoreboardView.js";

let PlayerOneScore = 0;
let PlayerTwoScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Player One", "Player Two");