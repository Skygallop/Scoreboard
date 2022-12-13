const root = document.querySelector("#mediaGroup");

var ticks = 0;

var paused = false;
var isReset= false;

var timer = 0;


console.log("MEDIABUTTONS IS ALIVE!");
let start = root.querySelectorAll(".mediaButtons").forEach(mediaButton => {
    mediaButton.addEventListener("click", () => {
       
        // PAUSE
        if(mediaButton.textContent == "||") {
            console.log("PAUSE!");
            paused = !paused;
            
        }

        // PLAY
        if(mediaButton.textContent == ">") {
            console.log("START!");
            setInterval(() => {
                if(!paused) {
                    ticks++;
                    // console.log(this.paused)
                    this.timer = document.getElementById("timer").textContent = ticks
                }
                console.log(ticks);
            }, 1000);
        }


        // STOP
        if(mediaButton.textContent == "↺") {
            console.log("RESET!");
            ticks = 0;
            isReset = !isReset;
            paused = !paused;
        }
        
    })
})

// pauseButton = document.querySelector("");

let pause = () => {

}