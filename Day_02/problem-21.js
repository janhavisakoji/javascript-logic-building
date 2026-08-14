//Print the cube of each number from 1 to n using while loop
//input: n = 10
//output: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000

let n = 10; // Number of terms
let i = 1;

console.log("The cubes of numbers from 1 to " + n + " are:");

while (i <= n) {
    console.log(Math.pow(i, 3));
    i++;
}   