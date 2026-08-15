//Print all factors of a given number using while loop
//input: num = 28
//output: 1, 2, 4, 7, 14, 28

let num = 28; // Given number
let i = 1;

console.log("Factors of " + num + " are:");

while (i <= num) {
    if (num % i === 0) {
        console.log(i);
    }
    i++;
}   