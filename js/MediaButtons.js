const root = document.querySelector("#mediaGroup");

var ticks = 0;

var paused = false;
var started = false;
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

        // STOP
        if(mediaButton.textContent == "↺") {
            console.log("RESET!");
            ticks = -1;
            isReset = !isReset;
            paused = false;
            // if(isReset) milis = 0;
        }
        
        // PLAY
        if(mediaButton.textContent == ">") {
            console.log("START!");
            milis = 1000;
            started = !started;
            setInterval(() => {
                if(!paused) {
                     ticks++;
                    // console.log(this.paused)
                     this.timer = document.getElementById("timer").textContent = ticks;
                 }
                 if(isReset) {
                    this.timer = 0;
                 }
                 console.log(ticks);
             }, milis);
        }
    })
})

// pauseButton = document.querySelector("");

let pause = () => {

}