//Print the Fibonacci series up to n terms using while loop
//input: n = 10
//output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let n = 10; // Number of terms
let a = 0, b = 1, nextTerm;

console.log("Fibonacci Series up to " + n + " terms:");

let count = 0;
while (count < n) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
    count++;
}   