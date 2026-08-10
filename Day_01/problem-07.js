// Check whether a character is uppercase, lowercase, a number, or a special character.
// input = #
// output = # is a special character

let char = "#";

if (char >= 'A' && char <= 'Z') {
    console.log(char + " is an uppercase letter.");
}
else if (char >= 'a' && char <= 'z') {
    console.log(char + " is a lowercase letter.");
}
else if (char >= '0' && char <= '9') {
    console.log(char + " is a number.");
}
else {
    console.log(char + " is a special character.");
}