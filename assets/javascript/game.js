
//Generate random numbers between 19 and 120
var targetNumber = Math.floor(Math.random() * 102 + 19);
var counter = 0;
var wins = 0;
var losses = 0;

$("#guessNumber").text(targetNumber);
$("#playerScore").text(counter);

var images = ["assets/images/diamond.png", "assets/images/roundgem.jpg", "assets/images/squaregem.jpg", "assets/images/trianglegem.jpg"]
var numberOptions = [];

//Initialize the crystals and the click event 
function SetCrystals() {
    //alert("init");
    //Generate an array of random numbers between 1 and 12
    for (var i = 0; i < 4; i++) {
        numberOptions[i] = Math.floor(Math.random() * 12) + 1;
    }

    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {

        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", images[i]);

        // Each imageCrystal will be given a data attribute called data-crystalvalue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal); 
    }

    $(".crystal-image").on("click", function () {
        //extract the value from the data attribute.
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = Number(crystalValue);
    
        counter += crystalValue;
    
        if (counter === targetNumber) {
            $("#winOrloss").text("You won!");
            wins += 1;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        else if (counter >= targetNumber) {
            $("#winOrloss").text("You lost!")
            losses += 1;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    
        $("#playerScore").text(counter);
    
    });
}

SetCrystals();

//Reset the variables and crystals/event once a player wins/losses
function reset() {
    targetNumber = Math.floor(Math.random() * 102 + 19);
    counter = 0;
    $("#guessNumber").text(targetNumber);
    $("#playerScore").text(counter);
    $("#crystals").empty();
    numberOptions = [];
    SetCrystals();
}