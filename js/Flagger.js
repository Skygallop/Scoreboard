/*
    SCRIPT ALGORITHM WHICH TELLS THE PROGRAM WHICH FLAG TO DISPLAY
    DEPENDING ON THE COUNTRY OF CHOICE.
*/

const masterPath = "./flags/";

fs.readdir(masterPath, (err, files) => {
    console.log(files.length);
})