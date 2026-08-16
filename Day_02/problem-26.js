//Find the HCF (Highest Common Factor) of two numbers using while loop
//input: num1 = 28, num2 = 35
//output: 7

let num1 = 28; // First number
let num2 = 35; // Second number
let hcf = 1; // Variable to store the HCF
let i = 1;

while (i <= num1 && i <= num2) {
    if (num1 % i === 0 && num2 % i === 0) {
        hcf = i; // Update HCF if both numbers are divisible by i
    }
    i++;
}

console.log("HCF of " + num1 + " and " + num2 + " is: " + hcf); 