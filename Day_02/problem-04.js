// Write a while loop that prints all the odd numbers from 1 to 100.
// input: none
// output: 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99

let num = 1;

while(num <= 100) {
    if(num % 2 !== 0) {
        console.log(num);
    }
    num++;
}