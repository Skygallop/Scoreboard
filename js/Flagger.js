/*
    SCRIPT ALGORITHM WHICH TELLS THE PROGRAM WHICH FLAG TO DISPLAY
    DEPENDING ON THE COUNTRY OF CHOICE.
*/
const flagList = "https://raw.githubusercontent.com/Robatortas/Flags_Server/main/flag_list.flag";

let playerOneName = $("#teamOneDrop").value;
let playerTwoName = $("#teamTwoDrop").value;

setInterval(() => {
    playerOneName = document.querySelector("#teamOneDrop").value;
     playerTwoName = document.querySelector("#teamTwoDrop").value;
}, 100);

function getText() {
    var request = new XMLHttpRequest();
    request.open('GET', flagList, true);
    request.send(null);
    request.onreadystatechange = () => {
        if(request.readyState == 4 && request.status == 200){
            var type = request.getResponseHeader("Content-Type");
            if(type.indexOf("text") !== 1) {
                var array = request.responseText.split("\n");
                for(var i = 0; i < array.length; i++) {
                    if(array[i].toString().includes(playerOneName)) {
                        document.getElementById("teamOneFlag").src = array[i].toString();
                    }
                    if(array[i].toString().includes(playerTwoName)) {
                        document.getElementById("teamTwoFlag").src = array[i].toString();
                    }
                }
                return request.responseText.split("\n");
            }
        }
    }
}

$("#teamOneDrop").on("change", function () {
    var interval = setInterval(() => {    
        getText();
    }, 1000);
});
$("#teamTwoDrop").change(function () {
    var interval = setInterval(() => {    
        getText();
    }, 1000);
});


console.log("WORK!");