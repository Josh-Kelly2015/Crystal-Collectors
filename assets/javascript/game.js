//4 images of crystals that are buttons with IDs and a value

//player is displayed a random number(19-120) in a specificed div 
//variables i made global for some reason because for some reason it reads as undefined 
var min = Math.ceil(19);
var max = Math.floor(120);

//my function to randomize numbers between a certain range
function goalNumber(min, max) {
    var max = Math.floor(120);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result
};


//displays a randomized number to my goal div
document.getElementById("goal").innerHTML = goalNumber(min, max);

//another function to generate random numbers 1-12 for my score div
function score(min, max) {
    var min = Math.ceil(1);
    var max = Math.floor(12);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result
};

//sets value to my blueCrystal img
$("#blueCrystal").attr("value", score(min, max));
blueCrystalValue = $("#blueCrystal").attr("value");

console.log(blueCrystalValue)

//sets value for greenCrystal
$("#greenCrystal").attr("value", score(min, max));
greenCrystalValue = $("#greenCrystal").attr("value");


console.log(greenCrystalValue);

//sets value for purpleCrystal
$("#purpleCrystal").attr("value", score(min, max));
purpleCrystalValue = $("#purpleCrystal").attr("value");

console.log(purpleCrystalValue);

//sets value for rainbowCrystal
$("#rainbowCrystal").attr("value", score(min, max));
var rainbowCrystalValue = $("#rainbowCrystal").attr("value");

console.log(rainbowCrystalValue);

//this function dispalys the random number chosen for the img values. i have to add these together by keeping the previous value always displayed
$("img[value]").on("click", function () {
    var totalScore = $(this).attr("value");

    return document.getElementById("score").innerHTML = totalScore
})


//player must add values together to equal the random number displayed by clicking images
//these values are only discovered by the user after clicking the crystal
//every clicked crystal updates the div this number is displayed in with the firstvalue + secondvalue
//player wins++ if totalScore===goal
//players loses++ if totalScore < goal 
//game restarts after every win/lose
//new game means new random number, new crystal values, score/score_counter reset 0
//const wins/losses even after new games. 

