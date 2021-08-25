let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
    name = prompt("Hi There! What's your name?");
}

alert("Welcome at Guess the Number " + name + "!!");


function guessNumber() {
    var randomNum = Math.floor(Math.random() * 26);

    // output to the console for debugging
    console.log(randomNum);

    //declare a variable
    var guess;
    guess = prompt("Please enter a number between 0 and 25");
    //console.log("Your guess is: " + guess);

    if (guess < randomNum) {
        window.alert("Your guess is too low! Guess again.");
    } else if (guess > randomNum) {
        window.alert("Your guess is too high! Guess again.");
    } else if (guess == randomNum) {
        window.alert("You guessed it, Congratulations, you win!");
    } else {
        window.alert("Thank yu for playing! See yaa!");
    }


}