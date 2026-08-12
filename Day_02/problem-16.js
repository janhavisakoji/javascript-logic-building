//Check whether the given number is a Perfect number using while loop.
//input: A number (e.g., 28) 
//output: The number is a Perfect number.

let num = 28;
let sum = 0; // Initialize sum to 0
let i = 1; // Initialize i to 1

while (i < num) {
    if (num % i === 0) {
        sum += i; // Add the divisor to the sum
    }
    i++;
}

if (sum === num) {
    console.log("The number", num, "is a Perfect number.");
} else {
    console.log("The number", num, "is not a Perfect number.");
}
