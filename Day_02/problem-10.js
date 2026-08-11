//Find and print the product of all digits of a given number using while loop
//input: A number (e.g., 12345)
//output: The product of all digits of the number is: 120

let number = 12345; // Example number
let product = 1; // Initialize product to 1

// Convert the number to a string to iterate over each digit
let digits = number.toString();

let index = 0; // Initialize index for while loop
while (index < digits.length) {
    let digit = parseInt(digits[index]); // Convert character to integer
    product *= digit; // Multiply the product by the current digit
    index++; // Move to the next digit
}

console.log("The product of all digits of", number, "is:", product);


