$(document).ready(function() {
     // a number is randomly chosen by the computer as the score to achieve
    targetNumber = Math.floor(Math.random() * 121 +19);  
    $("#target-number").text("Target Number is: " + targetNumber); 
    console.log(targetNumber); 
    // the computer then generates a random number between 1 and 12 for each crystal
    var img1 = Math.floor(Math.random() * 13 + 1);
    var img2 = Math.floor(Math.random() * 13 + 1);
    var img3 = Math.floor(Math.random() * 13 + 1);
    var img4 = Math.floor(Math.random() * 13 + 1);
    // empty variables for our counts and link to the HTML
    var userCurrentTotal = 0;
    var wins = 0;
    var losses = 0;
    
        $("#img1").on("click", function(){
            userCurrentTotal = userCurrentTotal + img1;
            $("#users-current-score").text("Current Total: " + userCurrentTotal);
            checkOutcome();
            console.log(userCurrentTotal);
        })

        $("#img2").on("click", function(){
            userCurrentTotal = userCurrentTotal + img2;
            $("#users-current-score").text("Current Total: " + userCurrentTotal);
            checkOutcome();
            console.log(userCurrentTotal);
        })
        
        $("#img3").on("click", function(){
            userCurrentTotal = userCurrentTotal + img3;
            $("#users-current-score").text("Current Total: " + userCurrentTotal);
            checkOutcome();
            console.log(userCurrentTotal);
        })
        
        $("#img4").on("click", function(){
            userCurrentTotal = userCurrentTotal + img4;
            $("#users-current-score").text("Current Total: " + userCurrentTotal);
            checkOutcome();
            console.log(userCurrentTotal);
        })
        
        function checkOutcome() {
            if (userCurrentTotal > targetNumber){
                losses++;
                $("#losses").text("Losses " + losses);
                reset();
                console.log();
            }
            if (userCurrentTotal === targetNumber){
                wins++;
                $("#wins").text("Wins " + wins);
                reset();
                console.log();
            }
        }

        
        function reset(){

            targetNumber = Math.floor(Math.random() * 121 +19);  
            $("#target-number").text("Target Number is: " + targetNumber); 
            console.log(targetNumber); 
            img1 = Math.floor(Math.random() * 13 + 1);
            img2 = Math.floor(Math.random() * 13 + 1);
            img3 = Math.floor(Math.random() * 13 + 1);
            img4 = Math.floor(Math.random() * 13 + 1);
                
            userCurrentTotal = 0;
            $("#users-current-score").text("Current Total: " + userCurrentTotal);
            console.log();
        }
    
});

// Move helper functions down here