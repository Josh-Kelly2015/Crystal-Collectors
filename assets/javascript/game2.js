//  There will be four crystals displayed as buttons on the page.
// redCrystal, blueCrystal, purpleCrystal, rainbowCrystal..... <img src="assets/images/Rainbow_Crystal.jpg" id = "rainbowCrystal" height="80" width="80">ht="80" width="80">

//  The player will be shown a random number at the start of the game.
// math.floor(random() * 120) + 19; document.ready this number. inside the goal div. all the time. 
//  When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//create on click event. $("#blueCrystal").on("click", blueValue);
//                       $("#greenCrystal").on("click", greenValue);
//                       $("#purpleCrystal").on("click", purpleValue);
//                       $("$rainbowCrystal").on("click", rainbowValue);
//variables for our functions
// var rainbowValue; math.floor(random() * 12) + 1; set attr value to raimbowCrystal using a random number. 
// var greenValue;
// var blueValue;
// var purplebowValue;
//var goal; the target number we are trying to match totalScore to. 
// var totalScore = sum of numbers inside scoreCounter array
//var scoreCounter[store a crystal value here when that crystal is clicked]; clear on win/loss
//clear number after win/loss. replace with antoher random number for crystal value. 
//removeAttr() for specified crystal. math.floor(random() * 12) + 1; set attr value to rainbowCrystal using a random number. 
//    Your game will hide this amount until the player clicks a crystal.
//    When they do click one, update the player's score counter.
// $("#score").text("totalScore");
//  The player wins if their total score matches the random number from the beginning of the game.
//  The game restarts whenever the player wins or loses.
// if(totalScore === goal){
// wins++;
// clear var rainbowValue, blueValue, purpleValue, greenValue. 
// re call the function that is placing the goals value in the goal div. 
//alert player wins
//}
//  The player loses if their score goes above the random number.
// else if(totalScore>goal) {
// losses++
// clear var rainbowValue, blueValue, purpleValue, greenValue
// re call the function that is placing the goals value in the goal div. 
//alert player loses
//}




//     When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//  The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//=============================================================================================================================================================================//

window.onload = function () {
    //need to figure out how to get the newScore to increment(?) or add the value of the crystal that is clicked to the latest value of #score 
    $("#blueCrystal").on("click", function (newScore) {
        newScore = value + crystals.blueCrystal;
        $("#score").attr("value", newScore);

        $("#score").text(newScore);
        console.log(newScore);
    });






    //assign the randomNumber to the button images
    // //blue crystal
    // $("#blueCrystal").on("click", function () {
    //     // $("#score").attr("value", crystals.blueCrystal);
    //     // $("#score").text($("#score").attr("value"));
    //     if ($("button").on("click", function (){
    //         var value = parseInt($("#score").attr("value"));
    //         var vals = value + crystals.blueCrystal;
    //         $("#score").text(vals);
    //     }


    // });




    //green crystal
    $("#greenCrystal").on("click", function () {
        $("#score").attr("value", crystals.greenCrystal);

        console.log($("#score").attr("value"));
    });

    //purple crystal 
    $("#purpleCrystal").on("click", function () {
        $("#score").attr("value", crystals.purpleCrystal);

        console.log($("#score").attr("value"));
    });

    //rainbow crystal
    $("#rainbowCrystal").click(function () {
        $("#score").attr("value", crystals.rainbowCrystal);

        console.log($("#rainbowCrystal").attr("value"));
    });


    $("button").click(function () {

        $("#score").attr("value", function () {
            //set the value of score to display the previous value + newvalue
            //   console.log($("#score").val());
        });



    });




    // 
    //variables'
    var value = parseInt($("#score").attr("value"));
    var randomNumber = function (min, max) { return Math.floor(Math.random() * (max - min)) + min; };
    var crystals = {
        blueCrystal: randomNumber(1, 12),
        greenCrystal: randomNumber(1, 12),
        purpleCrystal: randomNumber(1, 12),
        rainbowCrystal: randomNumber(1, 12)
    };
    (console.log(crystals.blueCrystal));
    (console.log(crystals.greenCrystal));
    (console.log(crystals.purpleCrystal));
    (console.log(crystals.rainbowCrystal));


    //displays a random number to goal div
    $("#goal").html(randomNumber(19, 120));

};



// set specific buttons specific values.

//this is the blue crystal button




