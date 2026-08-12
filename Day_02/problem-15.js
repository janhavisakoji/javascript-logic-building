//Check whether the given number is an Armstrong number.
//input: A number (e.g., 153)
//output: The number is an Armstrong number.

let num = 153;
let originalNum = num; // Store the original number for comparison
let sum = 0; // Initialize sum to 0
let digits = num.toString().length; // Get the number of digits in the number

while (num > 0) {
    let digit = num % 10; // Get the last digit
    sum += Math.pow(digit, digits); // Add the digit raised to the power of the number of digits to the sum
    num = Math.floor(num / 10); // Remove the last digit from the original number
}

if (originalNum === sum) {
    console.log("The number", originalNum, "is an Armstrong number.");
} else {
    console.log("The number", originalNum, "is not an Armstrong number.");
}   


