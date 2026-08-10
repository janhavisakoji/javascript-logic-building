// Print the multiplication table of a given number from n × 1 to n × 10.
// input: 5
// output: 5 x 1 = 5
//         5 x 2 = 10
//         5 x 3 = 15
//         5 x 4 = 20
//         5 x 5 = 25
//         5 x 6 = 30
//         5 x 7 = 35
//         5 x 8 = 40
//         5 x 9 = 45
//         5 x 10 = 50  

let num = 1;
let n = 5; // given number
while (num <= 10) {
    console.log(n + " x " + num + " = " + (n * num));
    num++;
}