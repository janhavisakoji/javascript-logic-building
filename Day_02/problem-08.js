// Program to find the sum of first n odd natural numbers
// input: 30
// output: The sum of first 30 odd natural numbers is: 225

let n = 30;
let sum = 0;
let i = 1;

while (i <= n) {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
}
console.log("The sum of first " + n + " odd natural numbers is: " + sum);