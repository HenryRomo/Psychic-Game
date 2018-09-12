var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Variables to keep track of wins, losses and etc.

var wins = 0;
var losses = 0;
var guessesLeft = 10;

//Variable to make the game choose a letter.
var appChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(appChoice)

//Handles user choice and checking against apps letter for win or loss.

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === appChoice){
        wins++;
    }else{
        guessesLeft--;
    }

    if(guesses === 0){
        losses++
    }
}