//Count and print the total number of digits in a given number.
//input: A number (e.g., 12345)
//output: The total number of digits in the number is: 5

let number = 12345;
let count = 0; // Initialize count to 0

// Convert the number to a string to iterate over each digit
let digits = number.toString();

let index = 0; // Initialize index for while loop
while (index < digits.length) {
    count++; // Increment count for each digit
    index++; // Move to the next digit
}

console.log("The total number of digits in", number, "is:", count);


