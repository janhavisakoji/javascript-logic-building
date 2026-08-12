//Print all prime numbers between 1 and 100.
// input: None
// output: All prime numbers between 1 and 100

let num = 2; // Start from the first prime number
console.log("Prime numbers between 1 and 100 are:");
while (num <= 100) {
    let isPrime = true; // Assume the number is prime
    let i = 2; // Start checking for factors from 2
    
    while (i <= Math.sqrt(num)) { // Check up to the square root of the number
        if (num % i === 0) {
            isPrime = false; // If a factor is found, the number is not prime
            break;
        }
        i++;
    }

    if (isPrime) {
        console.log(num);
    }

    num++;
}