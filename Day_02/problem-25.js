//Find and print the sum of all factors of the given number using while loop
//input: num = 28
//output: 56

let num = 28; // Given number
let i = 1;
let sum = 0;

while (i <= num) {
    if (num % i === 0) {
        sum += i; // Add the factor to the sum
    }
    i++;
}

console.log("Sum of all factors of " + num + " is: " + sum);    