// This code calculates the sum of the digits of a given number
//input: A number (e.g., 12345)
//output: The sum of the digits (e.g., 15)

let num = 12345; // Example number
let sum = 0; // Initialize sum to 0

while  (num > 0) {
    let digit = num % 10; // Get the last digit
    sum += digit; // Add the digit to the sum
    num = Math.floor(num / 10); // Remove the last digit from the original number       
}
console.log("The sum of the digits is:", sum);