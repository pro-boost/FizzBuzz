let randomNumber; 
let attempts = 0; 
let score = 0;
let result;

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').innerText = randomNumber;
}

// Function to check the player's choice and update the game accordingly
function choice(option) {
    if (option === "Fizz" && randomNumber % 3 === 0) {
        result="Correct! The number is divisible by 3.";
        score++;
        generateRandomNumber();
    } else if (option === "Buzz" && randomNumber % 5 === 0) {
        result="Correct! The number is divisible by 5.";
        score++;
        generateRandomNumber();
    } else if (option === "FizzBuzz" && randomNumber % 3 === 0 && randomNumber % 5 === 0) {
        result="Correct! The number is divisible by both 3 and 5.";
        score++;
        generateRandomNumber();
    } else if (option === "continue" && randomNumber % 3 !== 0 && randomNumber % 5 !== 0) {
        result="correct! The number is not divisible by 3 or 5.";
        score++;
        generateRandomNumber();
    } else {
        attempts++;
        if (attempts === 3) {
            result="You've failed 3 times. Game Over!";
            attempts = 0;
            score = 0;
            generateRandomNumber();
        } else {
            result="Incorrect! Try again.";
        }
    }
    document.getElementById('result').innerText=result;
    document.getElementById('attempts').innerText = "Failed attempts : " + attempts;
    document.getElementById('score').innerText = "The score is " + score;
}


// Call generateRandomNumber function when the page loads
window.onload = generateRandomNumber;
