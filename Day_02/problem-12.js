//Reverse the given number and print the reversed value.
//input: A number (e.g., 12345)
//output: The reversed number is: 54321

let number = 12345; // Example number
let reversedNumber = 0; // Initialize reversed number to 0

while (number > 0) {
    let digit = number % 10; // Get the last digit
    reversedNumber = reversedNumber * 10 + digit; // Append the digit to the reversed number
    number = Math.floor(number / 10); // Remove the last digit from the original number
}

console.log("The reversed number is:", reversedNumber);