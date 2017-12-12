
//Generate random numbers between 19 and 120
/* var targetNumber = 53; */
var targetNumber = Math.floor(Math.random() * 102 + 19);
var counter = 0;
var wins = 0;
var losses = 0;

$("#guessNumber").text(targetNumber);
$("#playerScore").text(counter);
//Generate random numbers between 1 and 12
//var num = Math.floor((Math.random() * 12) + 1);

//Generate an array of random numbers between 1 and 12
var images = ["assets/images/diamond.png", "assets/images/roundgem.jpg", "assets/images/squaregem.jpg", "assets/images/trianglegem.jpg"]
var numberOptions = [];

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
    /* imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"); */
    imageCrystal.attr("src", images[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = Number(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);

    if (counter === targetNumber) {
        //alert("You win!");
        $("#winOrloss").text("You won!");
        wins += 1;
        $("#wins").text("Wins: " + wins);
        reset();
    }
    else if (counter >= targetNumber) {
        //alert("You lose!!");
        $("#winOrloss").text("You lost!")
        losses += 1;
        $("#losses").text("Losses: " + losses);
        reset();
    }

    $("#playerScore").text(counter);

});

function reset() {
    targetNumber = Math.floor(Math.random() * 102 + 19);
    counter = 0;
    $("#guessNumber").text(targetNumber);
    $("#playerScore").text(counter);
}