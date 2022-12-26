const root = document.querySelector("#VARGroup");
let playerOneName = document.getElementById("teamOneDrop"), playerTwoName = document.querySelector("#teamTwoDrop");	

const inputBox = document.querySelector("#inputBox");
const timer = document.querySelector("#timer");

let playerOneScore=0, playerTwoScore=0;

    let go = root.querySelectorAll(".VARbuttons").forEach(VARbutton => {
        VARbutton.addEventListener("click", () => {
    
            
            // GOALCHECK
            if(VARbutton.textContent == "Goal") {
                console.log("GOALCHECK!");

                inputBox.textContent += timer.textContent + " - " + "VAR is being checked for a possible goal! 🚩 \n";
            }
    
             // PARTY FOUL
            if(VARbutton.textContent == "PartyFoul") {
                console.log("PARTYFOUL!");
                
                inputBox.textContent += timer.textContent + " - " + "VAR is being checked for a possible party foul! 🚩 \n";
            }
            
            
            // HAND FOUL
            if(VARbutton.textContent == "HandFoul") {
                console.log("HANDFOUL!");

                inputBox.textContent += timer.textContent + " - " + "VAR is being checked for a posible hand foul! 🚩 \n";
                }

                // ACCIDENTAL TOUCHING
            if(VARbutton.textContent == "AccidentalTouch") {
                console.log("ACCIDENTALTOUCH!");

                inputBox.textContent += timer.textContent + " - " + "VAR is being checked for a possible accidental touch! 🚩 \n";
                }

                })
        }) 

        setInterval(() => {
            playerOneName = document.querySelector("#teamOneDrop").value;
            playerTwoName = document.querySelector("#teamTwoDrop").value;
        
            names.innerHTML = `
                    <div class="scoreboard">
                        <div class="scoreboard__name scoreboard__name--one">${playerOneName}</div>
                        <div class="scoreboard__name scoreboard__name--two">${playerTwoName}</div>
                    </div>
                            `;
        }, 100);