// Program to find the factorial of a given number using a while loop
// input: 5
// output: The factorial of the given number is: 120

let n = 5;
let factorial = 1;
while (n > 0) {
    factorial *= n;
    n--;
}
console.log("The factorial of the given number is: " + factorial);
