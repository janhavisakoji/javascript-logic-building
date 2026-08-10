//If valid, classify a triangle as equilateral, isosceles, or scalene.
// input: 5, 5, 5
// output: The triangle is equilateral

let side1 = 5;
let side2 = 5;
let side3 = 5;

if (side1 === side2 && side2 === side3) {
    console.log("The triangle is equilateral");
}
else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("The triangle is isosceles");
}
else {
    console.log("The triangle is scalene");
}