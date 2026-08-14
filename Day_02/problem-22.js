//Find and print the sum of the Fibonacci numbers up to a given number n
//input: n = 10
//output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//sum: 88

let n = 10; // Number of terms
let a = 0, b = 1, nextTerm;
let sum = a + b;

console.log("Fibonacci Series up to " + n + " terms:");

let count = 2; // Starting from the third term since we already have the first two
console.log(a);
console.log(b);

while (count < n) {
    nextTerm = a + b;
    console.log(nextTerm);
    sum += nextTerm;
    a = b;
    b = nextTerm;
    count++;
}

console.log("Sum of Fibonacci numbers up to " + n + " terms: " + sum);