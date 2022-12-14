const root = document.querySelector("#mediaGroup");

var ticks = 0;

var started = false;
var paused = false;
var isReset= false;

var timer = 0;
var milis = 0;

var intervalId;

console.log("MEDIABUTTONS IS ALIVE!");
let start = root.querySelectorAll(".mediaButtons").forEach(mediaButton => {
    mediaButton.addEventListener("click", () => {

        // PAUSE
        if(mediaButton.textContent == "||") {
            console.log("PAUSE!");
            // if(started) {
                paused = !paused;
            // }
            
        }

         // RESET
        if(mediaButton.textContent == "↺") {
            console.log("RESET!");
            
            document.getElementById("timer").textContent= 0;
            // paused = true;
            ticks = -1;
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

// TICKER
this.intervalId = setInterval(() => {
    if(!paused && started && !isReset) {
        ticks++;
        // console.log(this.paused)
        this.timer = document.getElementById("timer").textContent = ticks;
    }
    
    console.log(ticks);
}, 1000);


if(isReset) {
    
}

// pauseButton = document.querySelector("");

let pause = () => {

}