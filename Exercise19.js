const name = "Gabriel";
const grade1 = 7.5;
const grade2 = 5.0;
const average = (grade1 + grade2) / 2;
console.log(`Aluno: ${name}.`);

if (average < 7) {
    console.log(`you have not reached the minimum average of 7.0.`)
    console.log(`Average: ${average}.`);
} else {
    console.log(`Congratulations!`)
    console.log(`Average: ${average}.`);
}