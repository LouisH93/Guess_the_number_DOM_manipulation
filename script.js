'use strict';

// secretNumber is a value between 1 and 20. Since JS has no integer type, and random() produces a value between 0 and 1, it's necessary to multiply random() by the value of the desired end range (20). It's also necessary to add 1 to include the end of range value, otherwise anything between 19 and 20 would be rounded down to 19.
let secretNumber = document.querySelector("#secret_number").value = Math.floor(Math.random() * 20) + 1;

const displayMessage = function(message) {
    document.querySelector("#message").textContent = message;
};

const displayNumGuesses = function(number) {
    document.querySelector("#num_guesses").textContent = number;
};

const displaySecretNumber = function(secretNum) {
    document.querySelector("#secret_number").textContent = secretNum;
};

const displayHintMessage = function(hintMessage) {
    document.querySelector("#hint_message").textContent = hintMessage;
};

const hintBtnAnimation = function(property) { 
    document.querySelector("#hints_button").style.animation = property;  
};

const playAgainBtnAnimation = function(property) {
    document.querySelector("#play_again_btn").style.animation = property; 
};

const screenBgColourChange = function(colour) {
    document.querySelector("body").style.backgroundColor = colour;
};

displayMessage("Start guessing..");

// check! button click check and <input> data capture 
document.querySelector("#input_check_btn").addEventListener("click", function() {
    const currentUserGuess = Number(document.querySelector("#user_guess").value);
    let numberOfGuesses = Number(document.querySelector('#num_guesses').textContent); // value of 3 in index.html

        // No input check. No input has a falsy value of 0.
        if(!currentUserGuess){
            displayMessage("Invalid input😐");
            numberOfGuesses--;
            displayNumGuesses(numberOfGuesses); 

        // currentUserGuess is either too low or too higher.
        } else if(currentUserGuess !== secretNumber) {
            displayMessage(currentUserGuess < secretNumber ? "Higher👆" : "Lower👇");
            numberOfGuesses--;
            displayNumGuesses(numberOfGuesses); 
        
        // A correct guess.
        } else if(currentUserGuess === secretNumber) {
            screenBgColourChange("#60b347"); // green
            displayMessage("🎉 Correct!!!");
            displaySecretNumber(secretNumber);
            playAgainBtnAnimation("shake 0.6s infinite");
        }

    // numberOfGuesses is equal to 0. Game over.
     if(numberOfGuesses === 0) {
        screenBgColourChange("#cc0000"); // red
        displayMessage("GAME OVER!");
        displayNumGuesses(0);
        displaySecretNumber(secretNumber);
        hintBtnAnimation("none");
        playAgainBtnAnimation("shake 0.6s infinite");

    }   
});

// Hint.. button click configurations 
document.querySelector("#hints_button").addEventListener("click", function() {
    
    // Hints messages
    if(secretNumber % 2 === 0 && secretNumber === 18) {
        displayHintMessage("Square a number between 1 and 10 and then double it..");
        hintBtnAnimation("none");

    } else if(secretNumber % 2 === 0 && secretNumber === 16 || secretNumber === 9) {
        displayHintMessage("Square a number between 1 and 10..");
        hintBtnAnimation("none");

    } else if(secretNumber % 2 !== 0 && secretNumber === 15) {
        displayHintMessage("Square a number between 1 and 10, subtract 10 and you have the correct answer..");
        hintBtnAnimation("none");

    } else if(secretNumber % 2 === 0 && secretNumber === 12) {
        displayHintMessage("Square a number between 1 and 10 and then add the original number..");
        hintBtnAnimation("none");

    } else if(secretNumber % 2 === 0 && secretNumber === 8) {
        displayHintMessage("Square a number between 1 and 10 and then halve it..");
        hintBtnAnimation("none");

    } else if(secretNumber % 2 === 0 && secretNumber === 2) {
        displayHintMessage("Square a number between 1 and 10 and then halve it..");
        hintBtnAnimation("none");

    } else if(secretNumber % 2 === 0) {
        displayHintMessage("The number is even..");
        hintBtnAnimation("none");
        
    } else if(secretNumber % 2 !== 0) {
        displayHintMessage("The number is odd..");
        hintBtnAnimation("none");
    }

});

// The game is re-loaded upon clicking the Play Again! button
document.querySelector("#play_again_btn").addEventListener('click', function() {
    screenBgColourChange("#222"); // black
    displayMessage("Start guessing..");
    displayHintMessage("");
    displaySecretNumber("?");
    document.querySelector("#user_guess").value = "";
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayNumGuesses(3); 
    hintBtnAnimation("shake 0.6s infinite");
    playAgainBtnAnimation("none");
    
});
 