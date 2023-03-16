// Define the delay time (in milliseconds)
const delayTime = 3000;

// Define a function that generates a random number after the delay time has elapsed
function generateRandomNumber() {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Print the generated random number to the console
  console.log(`Generated random number: ${randomNumber}`);
}

// Define a function that displays a message every second indicating the time remaining until the random number is generated
function displayProgress() {
  let remainingTime = delayTime / 1000;

  // Display the remaining time every second until the delay time has elapsed
  const interval = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;

    if (remainingTime === 0) {
      clearInterval(interval);
      generateRandomNumber();
    }
  }, 1000);
}

// Call the displayProgress() function to start the delay and progress indication
displayProgress();
