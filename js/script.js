//variables based on classes //

const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector (".remaining span")
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters =[];

//function to update paragraph's inner text //
const letterProxy = function (word) {
    const letterProxyHolder = [];
    for (const letter of word) {
        console.log(letter);
        letterProxyHolder.push("●");
        letterProxyHolder.push("☀️");
    }
    wordInProgress.innerText = letterProxyHolder.join("");
};

letterProxy(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // empty message
    message.innerText = "";
    // grab what was entered into the input
    const guess = letterInput.value;
    // single letter only
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        // Yay, a correct letter was guessed
        makeGuess(guess);
    }
    letterInput.value = "";
});

const inputValidation = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        //empty?
        message.innerText = "Please enter a letter.";
    } else if (input.lenght > 1) {
        //more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        //did you type a number or multiple letters in error?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
    //Finally they typed a single letter
    return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly goose. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};
