// Define the input string
const input = "Hello World!";

// Define a function that will reverse the string after a delay of 2 seconds
function reverseString() {
  // Split the input string into an array of characters
  const chars = input.split("");

  // Reverse the array of characters
  const reversedChars = chars.reverse();

  // Join the reversed array of characters into a string
  const reversedString = reversedChars.join("");

  // Print the reversed string to the console
  console.log(reversedString);
}

// Call the reverseString() function after a delay of 2 seconds using setTimeout()
setTimeout(reverseString, 2000);
