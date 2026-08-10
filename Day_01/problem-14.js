//Build a simple electricity bill: first 100 units at ₹5/unit, next 100 at ₹7/unit, remaining units at ₹10/unit.
// input = 250
// output = The electricity bill for 250 units is ₹1700

let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
}
else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("The electricity bill for", units, "units is ₹" + bill);    


