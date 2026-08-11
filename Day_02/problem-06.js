// Program to find the sum of first n natural numbers using while loop
// input: 10
// output: The sum of first 10 natural numbers is: 55

let num = 10;
let sum = 0;
let i = 1;
while (i <= num) {
    sum += i;
    i++;
}
console.log("The sum of first " + num + " natural numbers is: " + sum);