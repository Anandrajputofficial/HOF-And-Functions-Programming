// Define the regular expression pattern for valid LinkedIn profile URLs
const linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Test the input URL against the pattern
const inputUrl = "https://www.linkedin.com/in/john-doe-123abc";
if (linkedinPattern.test(inputUrl)) {
  console.log("Input URL is a valid LinkedIn profile URL");
} else {
  console.log("Input URL is not a valid LinkedIn profile URL");
}
