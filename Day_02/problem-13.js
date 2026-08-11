// Check whether the given number is a palindrome.
//input: A number (e.g., 12321)
//output: The number is a palindrome.

let number = 12321; // Example number
let originalNumber = number; // Store the original number for comparison
let reversedNumber = 0; // Initialize reversed number to 0

while (number > 0) {
    let digit = number % 10; // Get the last digit
    reversedNumber = reversedNumber * 10 + digit; // Append the digit to the reversed number
    number = Math.floor(number / 10); // Remove the last digit from the original number
}

if (originalNumber === reversedNumber) {
    console.log("The number", originalNumber, "is a palindrome.");
} else {
    console.log("The number", originalNumber, "is not a palindrome.");
}   