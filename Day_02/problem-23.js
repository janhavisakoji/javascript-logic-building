//Print all numbers between a and b that are divisible by 7 using while loop
//input: a = 1, b = 100
//output: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98

let a = 1; // Starting number
let b = 100; // Ending number
let i = a;

console.log("Numbers between " + a + " and " + b + " that are divisible by 7:");

while (i <= b) {
    if (i % 7 === 0) {
        console.log(i);
    }
    i++;
}   