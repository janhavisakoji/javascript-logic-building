// Write a program to check the grade of a student based on marks obtained.
// input: 67
// output: 67 is C grade

let marks = 67;

if (marks >= 90) {
    console.log(marks + " is A grade");
}
else if (marks >= 75) {
    console.log(marks + " is B grade");
}
else if (marks >= 60) {
    console.log(marks + " is C grade");
}
else if (marks >= 50) {
    console.log(marks + " is D grade");
}
else {
    console.log("Failed");
}