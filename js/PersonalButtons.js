const root = document.querySelector("#personalGroup");
let playerOneName = document.getElementById("teamOneDrop"), playerTwoName = document.querySelector("#teamTwoDrop");	

const inputBox = document.querySelector("#inputBox");
const timer = document.querySelector("#timer");

let playerOneScore=0, playerTwoScore=0;

    let go = root.querySelectorAll(".personalbuttons").forEach(personalbutton => {
        personalbutton.addEventListener("click", () => {
    
            
            // MALPRACTICE
            if(personalbutton.textContent == "M") {
                console.log("MALPRACTICE!");

                inputBox.textContent += timer.textContent + " - " + playerOneName + " has commit a malpractice! " +(" Anull both current and next turn for" + playerOneName)+"\n";
            }
    
             // PARTY FOUL
            if(personalbutton.textContent == "P") {
                console.log("PARTYFOUL!");
                
                document.getElementById("timer").textContent= "00:00"; 
                inputBox.textContent += timer.textContent + " - " + playerOneName + " has commit a party foul! " +(" Anull both current and next turn for" + playerOneName)+"\n";
            }
            
            
            // HAND FOUL
            if(personalbutton.textContent == "H") {
                console.log("HANDFOUL!");
                inputBox.textContent += timer.textContent + " - " + playerOneName + " has commit a hand foul! - " + "Game end!" + " (" + "0" + "-" + "5" + ")\n";
                }
                })
        }) 

        let go2 = root.querySelectorAll(".personalbuttons2").forEach(personalbutton2 => {
            personalbutton2.addEventListener("click", () => {
        
                // MALPRACTICE
                if(personalbutton2.textContent == "M") {
                    console.log("MALPRACTICE!");
                    inputBox.textContent += timer.textContent + " - " + playerTwoName + " has commit a malpractice!" +(" Anull both current and next turn for" + playerOneName)+ "\n";
                }
        
                 // PARTY FOUL
                if(personalbutton2.textContent == "P") {
                    console.log("PARTYFOUL!");
                    
                    inputBox.textContent += timer.textContent + " - " + playerTwoName + " has commit a party foul! " +(" Anull both current and next turn for" + playerOneName)+"\n";
                }
                
                
                // HAND FOUL
                if(personalbutton2.textContent == "H") {
                    console.log("HANDFOUL!");
                    inputBox.textContent += timer.textContent + " - " + playerTwoName + " has commit a hand foul! - " + "Game end!" + " (" + "5" + "-" + "0" + ")\n";
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