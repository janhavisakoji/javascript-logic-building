//Determine whether three sides can form a valid triangle. Each pair of sides must be greater than the remaining side.
// input: 5, 4, 3
// output: The sides can form a valid triangle

let side1 = 5;
let side2 = 4;
let side3 = 3;

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("The sides can form a valid triangle");
}
else {
    console.log("The sides cannot form a valid triangle");
}