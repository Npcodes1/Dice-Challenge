let randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random number between 1-6 for first dice.

let randomImageSource = "images/dice" + randomNumber1 + ".png"; // Changing the source between images/dice1.png to images/dice6.png for the first dice.

let image1 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource); //To change the current image to one of the other dice images based off the random number generator.

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //Random number between 1-6 for second dice.

let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // Changing the source between images/dice1.png to images/dice6.png for the second dice.

let image2 = document.querySelectorAll("img")[2].setAttribute("src", randomImageSource2); //To change the current image to one of the other dice images based off the random number generator.


// To change the h1 title to declare the winner.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else document.querySelector("h1").innerHTML = "It's a Tie!";
