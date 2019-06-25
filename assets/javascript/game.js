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

    //variables
    var losses = 0;
    var wins = 0;
    randomNumber = function (min, max) { return Math.floor(Math.random() * (max - min)) + min; };
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
    $("#goal").text(randomNumber(19, 120));

    //blue crystal
    $("#blueCrystal").on("click", function () {

        if ($("#score").text() === "") {
            $("#score").text(crystals.blueCrystal);
        }
        else {
            $("#score").text(parseInt($("#score").text()) + crystals.blueCrystal);
        }
    });

    //green crystal
    $("#greenCrystal").on("click", function () {

        if ($("#score").text() === "") {
            $("#score").text(crystals.greenCrystal);
        }
        else {
            $("#score").text(parseInt($("#score").text()) + crystals.greenCrystal);
        }
    });

    //purple crystal 
    $("#purpleCrystal").on("click", function () {
        if ($("#score").text() === "") {
            $("#score").text(crystals.purpleCrystal);
        }
        else {
            $("#score").text(parseInt($("#score").text()) + crystals.purpleCrystal);
        }
    });

    //rainbow crystal
    $("#rainbowCrystal").click(function () {
        if ($("#score").text() === "") {
            $("#score").text(crystals.rainbowCrystal);
        }
        else {
            $("#score").text(parseInt($("#score").text()) + crystals.rainbowCrystal);
        }
    });

    function reset() { 
        $("#score").text("");
        $("#goal").text(randomNumber(19, 120));
        crystals = {
            blueCrystal: randomNumber(1, 12),
            greenCrystal: randomNumber(1, 12),
            purpleCrystal: randomNumber(1, 12),
            rainbowCrystal: randomNumber(1, 12)
        };
    };

    //figure out how to win
    //this function listens for every click to determine if score.text is equal to, or larger than goal.text. 
    $(".crystal").on("click", function () {
        //this if statement works properyl except for putting You won! inside the lostwon P. 
        if ($("#score").text() === $("#goal").text()) {
            wins++ //works properly
            $("#wins").text("Wins: " + wins); //works 
            $("#lostWon").text("You won!"); //never works   
            reset();

            return
        };
        //this if statement increments losses every button click regardless of condition
        if (parseInt($("#score").text()) > parseInt($("#goal").text())) {
            losses++ 
            $("#losses").text("Losses: " + losses); 
            $("#lostWon").text("You lost!"); //never works   
            reset();

            return
        };
    });



    // if (parseInt($("#score").text()) == parseInt($("#goal").text())) {
    //     $("#wins").text("Wins:" + wins++);
    //     $("#lostwon").text("You won!");
    //     $("#score").text("");
    //     $("#goal").text(randomNumber(19, 120));

    // }
    // if(newValue > $("#goal").html(randomNumber(19, 120))) {
    //     $("#losses").text(losses++);
    //     $("#lostwon").text("You lost!");
    //     $("#score").text("");
    // //     randomNumber();
    // // }

    // if ($("#score").text(parseInt($("#score").text())) === $("#goal").text(randomNumber(19, 120)));{
    //     // alert("You won!");
    // }

    // var score = $("#score").text();
    // var goal = $("#goal").text();
    // var decison = score.localeCompare(goal);

    // console.log(decison);

    // console.log(decison);
    // console.log($("#goal").text());


    // set specific buttons specific values
    //this is the blue crystal button



    //   // Use a function to initialize our calculator.
    //   // This way when the user hits clear, we can guarantee a reset of the app.
    //   function initializeCalculator() {
    //     firstNumber = "";
    //     secondNumber = "";
    //     operator = "";
    //     isOperatorChosen = false;
    //     isCalculated = false;

    //     $("#first-number, #second-number, #operator, #result").empty();
    //   }

};