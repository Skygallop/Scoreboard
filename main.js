import ScoreboardView from "./Scoreboard/ScoreboardView.js";

let PlayerOneScore = 0;
let PlayerTwoScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Player One", "Player Two", (player, direction) => {
    const difference = direction === "minus" ? -1 : 1;

    if (player === "one") {
        PlayerOneScore = Math.max(PlayerOneScore + difference, 0);
    } else {
        PlayerTwoScore = Math.max(PlayerTwoScore + difference, 0);
    }

    view.update(PlayerOneScore, PlayerTwoScore);
});

