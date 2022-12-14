const root = document.querySelector("#mediaGroup");

// SECONDS
var ticks = 0;
// MINUTES
var mins = 0;

var started = false;
var paused = false;
var isReset= false;

var timer = 0;
var milis = 0;

console.log("MEDIABUTTONS IS ALIVE!");
let start = root.querySelectorAll(".mediaButtons").forEach(mediaButton => {
    mediaButton.addEventListener("click", () => {

        // PAUSE
        if(mediaButton.textContent == "||") {
            console.log("PAUSE!");
            paused = !paused;
        }

         // RESET
        if(mediaButton.textContent == "↺") {
            console.log("RESET!");
            
            document.getElementById("timer").textContent= "00:00";
            ticks = 0;
            mins = 0;
            isReset = !isReset;
        }
        
        
        // PLAY
        if(mediaButton.textContent == ">") {
            console.log("START!");
            milis = 1000;
            started = true;
            paused = false;
            isReset = false;
        }
    })
})

var tickZero, minZero;

// TICKER
var intervalId = setInterval(() => {
    if(!paused && started && !isReset) {
        ticks+=1;
        if(ticks % 60 == 1) {
            console.log("+1 minute");
            mins++;
            if(ticks != 1) ticks = 0;
        }
        if(ticks == 1) mins--;

        if(ticks < 10) tickZero = "0";
        else tickZero = "";
        if(mins < 10) minZero = "0";
        else minZero = "";

        this.timer = document.getElementById("timer").textContent = minZero + mins + ":" + tickZero + ticks;
    }
}, 300);