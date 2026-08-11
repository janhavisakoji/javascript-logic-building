// Program to find the sum of first n even natural numbers
// input: 50
// output: The sum of first 50 even natural numbers is: 650

let n = 50;
let sum = 0;
let i = 1;

while (i <= n){
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log("The sum of first " + n + " even natural numbers is: " + sum);