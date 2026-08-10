//Find profit or loss from cost price and selling price, including the amount.
// input = 1000, 800
// output = Loss: 200

let costPrice = 1000;
let sellingPrice = 800;

if (sellingPrice > costPrice) {
    let profit = sellingPrice - costPrice;
    console.log("Profit: " + profit);
}
else if (costPrice > sellingPrice) {
    let loss = costPrice - sellingPrice;
    console.log("Loss: " + loss);
}
else {
    console.log("No profit, no loss");
}