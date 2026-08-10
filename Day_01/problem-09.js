// Write a program to check whether a number is divisible by 5 and 11 or not.
// input: 55
// output: 55 is divisible by both 5 and 11

let number = 55;

if (number % 5 === 0 && number % 11 === 0) {
    console.log( number + " is divisible by both 5 and 11");
}
else if (number % 5 === 0) {
    console.log( number + " is divisible by 5 but not by 11");
}
else if (number % 11 === 0) {
    console.log( number + " is divisible by 11 but not by 5");
}
else {
    console.log( number + " is not divisible by both 5 and 11");
}