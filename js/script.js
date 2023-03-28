//variables based on classes //

const guessedLetter = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector (".remaining span")
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//function to updaate paragraph's inner text //
const letterProxy = function (word) {
    const letterProxyHolder = [];
    for (const letter of word) {
        console.log(letter);
        letterProxyHolder.push("●");
    }
    wordInProgress.innerText = letterProxyHolder.join("");
};

letterProxy(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.ariaValueMax;
    console.log(guess);
    letterInput.value = "";
});
