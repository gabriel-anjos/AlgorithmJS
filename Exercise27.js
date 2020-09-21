const grade1 = 5.5;
const grade2 = 5;
const average = (grade1 + grade2) / 2;
console.log(average);
if (average < 4.9) {
    console.log(`Reproved!`)
} else {
    if ((5 <= average) && (average <= 6.9)) {
        console.log(`Recovering`)
    } else {
        console.log(`Aproved!`)
    }
}