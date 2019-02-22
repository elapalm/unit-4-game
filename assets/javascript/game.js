$(document).ready(function){

// a number is randomly chosen by the computer as the score to achieve

var targetNumber = Math.random(Math.floor() * 121) +18;

// the computer then generates a random number between 1 and 12 for each crystal
var img1 = Math.random(Math.floor() * 13) + 0;
var img2 = Math.random(Math.floor() * 13) + 0;
var img3 = Math.random(Math.floor() * 13) + 0;
var img4 = Math.random(Math.floor() * 13) + 0;

// empty variables for our counts and link to the HTML
$("#target-number").text(targetNumber);
$("#users-current-score").text(currentScore);
$("#wins").text(wins);
$("#losses").text(losses);
var userCurrentTotal = 0;
var wins = 0;
var losses = 0;

// the player then has to guess choose a series of crystals to equal the target score

$(".crystalimg").on("click", Function() {
    
};
)

// if the player goes over the target score they lose the game

//if the player chooses the correct score based on additions of the crystal clicks they win the game

};
