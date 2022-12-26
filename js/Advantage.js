const root = document.querySelector("#AdvGroup");
let playerOneName = document.getElementById("teamOneDrop"), playerTwoName = document.querySelector("#teamTwoDrop");	

const inputBox = document.querySelector("#inputBox");
const timer = document.querySelector("#timer");

var ADV = "0";

let playerOneScore=0, playerTwoScore=0;

    let go = root.querySelectorAll(".Advbuttons").forEach(Advbutton => {
        Advbutton.addEventListener("click", () => {
    
            
            // HOME TEAM
            if(Advbutton.textContent == "HOME") {
                console.log("HOMEADV!");

                inputBox.textContent += timer.textContent + " - " + playerOneName + " has advantage!" + "🟢" +" \n";
                ADV = 1;
            }
    
             // NULL
            if(Advbutton.textContent == " - ") {
                console.log("NULLADV!");
                
                inputBox.textContent += timer.textContent + " - " + "Advantage has been anulled! \n";

                ADV = 0;
            }
            
            
            // AWAY TEAM
            if(Advbutton.textContent == "AWAY") {
                console.log("AWAYADV!");

                inputBox.textContent += timer.textContent + " - " + playerTwoName + " has advantage!" + "🟢" +" \n";
                ADV = 2;
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