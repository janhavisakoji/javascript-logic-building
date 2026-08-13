//Check whether the given number is a prime number using while loop.
//input : 29
//output : 29 is a prime number.

let number = 29; // You can change this number to test other values
let isPrime = true;
let i = 2;

while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
