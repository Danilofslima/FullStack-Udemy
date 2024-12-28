
// Dicee Challenge Step 3 - Create a Random Number// Dicee Challenge Step 3 - Create a Random Number

function randomN() {
    var randomNumber1 = Math.random(); // Generate a random number between 0 and 1
    randomNumber1 = randomNumber1 * 6; // Scale it up to a range from 0 to 6
    randomNumber1 = Math.floor(randomNumber1) + 1; // Round down and shift range from 1 to 6
    return randomNumber1; // Return the random number
}

var X = randomN(); // Call the function and store the result in X
// alert(X); // Alert the random number

// Dicee Challenge Step 4 - Change the <img> to a Random Dice
// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.

var randomNumber1 = randomN();
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage; // Assuming images are in 'images' folder

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



// Dicee Challenge Step 5 - Change both <img> Elements :
// Do the same for the right hand side image element.

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png"; // dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage; // Assuming images are in 'images' folder

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

// Dicee Challenge Step 6 - Change the Title to Display a Winner
// Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";    
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins"; 
}
else {
    document.querySelector("h1").innerHTML="It's a draw";
}
