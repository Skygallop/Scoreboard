const root = document.querySelector("#lineGroup");
let playerOneName = document.getElementById("teamOneDrop"), playerTwoName = document.querySelector("#teamTwoDrop");	

const inputBox = document.querySelector("#inputBox");
const timer = document.querySelector("#timer");

let playerOneScore=0, playerTwoScore=0;

    let go = root.querySelectorAll(".linebuttons").forEach(linebutton => {
        linebutton.addEventListener("click", () => {
    
            
            // FIRST LINE
            if(linebutton.textContent == "1ST") {
                console.log("FIRSTLINE!");

                inputBox.textContent += timer.textContent + " - " + playerOneName + " has claimed first line! " + "" + "\n";
            }
    
             // SECOND LINE
            if(linebutton.textContent == "2ND") {
                console.log("SECONDLINE!");
                
                document.getElementById("timer").textContent= "00:00"; 
                inputBox.textContent += timer.textContent + " - " + playerOneName + " has claimed second line! " + "\n";
            }
            
            
            // IMPOSSIBILITY
            if(linebutton.textContent == "IMP") {
                console.log("IMPOSSIBILITY!");
                inputBox.textContent += timer.textContent + " - " + playerOneName + " has claimed an impossibility! " + "\n";
                }
              
                })
        }) 

        let go2 = root.querySelectorAll(".linebuttons2").forEach(linebutton2 => {
            linebutton2.addEventListener("click", () => {
        
                // FIRST LINE
                if(linebutton2.textContent == "1ST") {
                    console.log("FIRSTLINE!");
                    inputBox.textContent += timer.textContent + " - " + playerTwoName + " has claimed first line! " + "" + "\n";
                }
        
                 // SECOND LINE
                if(linebutton2.textContent == "2ND") {
                    console.log("SECONDLINE!");
                    
                    inputBox.textContent += timer.textContent + " - " + playerTwoName + " has claimed second line! " + "\n";
                }
                
                
                // IMPOSSIBILITY
                if(linebutton2.textContent == "IMP") {
                    console.log("IMPOSSIBILITY!");
                    inputBox.textContent += timer.textContent + " - " + playerTwoName + " has claimed an impossibility! " + "\n";
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