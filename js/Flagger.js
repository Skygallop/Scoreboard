/*
    SCRIPT THAT TELLS THE PROGRAM WHICH FLAG TO DISPLAY
    DEPENDING ON THE COUNTRY OF CHOICE.
*/
const flagList = "https://raw.githubusercontent.com/Robatortas/Flags_Server/main/flag_list.flag";

let playerOneName = $("#teamOneDrop").value;
let playerTwoName = $("#teamTwoDrop").value;

var choosingFirstPlayer = false;

async function getText() {
    var request = new XMLHttpRequest();
    let bool = false;
    var interval = setInterval(() => {  
    playerOneName = document.querySelector("#teamOneDrop").value;
    playerTwoName = document.querySelector("#teamTwoDrop").value;

    var teamBeingChosen = choosingFirstPlayer ? playerOneName : playerTwoName;

    console.log(teamBeingChosen)

    request.open('GET', flagList, true);
    request.send(null);
    request.onreadystatechange = () => {
        if(request.readyState == 4 && request.status == 200){
            var type = request.getResponseHeader("Content-Type");
            if(type.indexOf("text") !== 1) {
                var array = request.responseText.split("\n");
                    for(var i = 0; i < array.length; i++) {
                        var img = array[i];
                        for(var j = 0; j < img.length; j++) {
                            var dir = img.substring(0, img.lastIndexOf("/")+1);
                            var fileExtension = img.substring(img.lastIndexOf("."));
                            var queriedImage = dir+teamBeingChosen+fileExtension;
                            console.log();
                            if(img == queriedImage) {
                                if(teamBeingChosen == playerOneName) document.getElementById("teamOneFlag").src = queriedImage;
                                else document.getElementById("teamTwoFlag").src = queriedImage;
                        }
                    }
                }
            }
        }
    }
    // SECURITY MEASURE
    clearInterval(interval);
}, 1);
}

$("#teamOneDrop").on("change", function () {
    choosingFirstPlayer = true;
    getText();
});
$("#teamTwoDrop").on("change", function () {
    choosingFirstPlayer = false;
    getText();
});