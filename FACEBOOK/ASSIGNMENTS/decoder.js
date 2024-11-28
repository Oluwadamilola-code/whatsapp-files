// script.js
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function reverse(alpha) {
  const rIndex = 25 - alphabet.indexOf(alpha); // Calculate reverse index
  return alphabet[rIndex]; // Return corresponding reversed letter
}

function reverseWord(word) {
  let wordOutput = "";
  for (const element of word) {
    if (alphabet.includes(element)) {
      wordOutput += reverse(element); // Reverse lowercase letters
    } else if (alphabet.includes(element.toLowerCase())) {
      wordOutput += reverse(element.toLowerCase()).toUpperCase(); // Reverse uppercase letters
    } else {
      wordOutput += element; // Keep non-alphabetic characters as is
    }
  }
  return wordOutput;
}

function decode() {
  const inputText = document.getElementById('inputText').value; // Get user input
  const output = reverseWord(inputText); // Decode the input
  document.getElementById('outputText').textContent = output; // Display the result
}
