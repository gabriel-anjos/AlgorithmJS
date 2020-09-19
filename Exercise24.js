const distance = 2000;
const cost1 = 0.50;
const cost2 = 0.45;
if (distance > 200) {
    const far = distance * cost2;
    console.log(`your travel distance: ${distance} km`)
    console.log(`the price of the ticket it's: ${far}.`)
} else {
    const near = distance * cost1;
    console.log(`your travel distance: ${distance} km`)
    console.log(`The price of the ticket it's: ${near}.`)
}

