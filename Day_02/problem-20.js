// This program prints the first n powers of a given number.
// Input: n = 10, power = 2
// Output: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

let n = 10;
let power = 2;
let i = 1;
console.log("The first " + n + " powers of " + power + " are:");

while (i <= n) {
    console.log(Math.pow(i, power));
    i++;
}