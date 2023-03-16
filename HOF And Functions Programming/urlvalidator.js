// Define the regex pattern to match valid URLs
const urlPattern = /^https?:\/\/[\w\d\s./?=#+-]+\.[\w]+$/i;

// Test the regex pattern against a sample URL
const sampleUrl = "https://www.example.com";
if (urlPattern.test(sampleUrl)) {
  console.log("The input URL is valid.");
} else {
  console.log("The input URL is not valid.");
}
