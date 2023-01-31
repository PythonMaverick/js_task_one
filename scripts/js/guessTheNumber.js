const form = document.querySelector("form");
const resultMessage = document.querySelector(".result-message");
const targetNumber = Math.floor(Math.random() * 10) + 1;

console.log(targetNumber);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userGuess = parseInt(document.querySelector("#user-guess").value);
    if (userGuess === targetNumber) {
        resultMessage.textContent = "Yeap, you won! The number was " + targetNumber;
    } else if (userGuess > targetNumber) {
        resultMessage.textContent = "Nope, Too high. Try again :)";
    } else {
        resultMessage.textContent = "Nope, Too low. Try again :)";}
    });
