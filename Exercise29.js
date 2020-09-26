const name = "Gabriel";
const salary = 900;
const startYear = 2001;
const currentYear = 2020;
const timeEmployee = currentYear - startYear;
const adjustment3Years = 3 * salary / 100;
const adjustment10Years = 12.5 * salary / 100;
const adjustmentMoreYears = 20 * salary / 100;

if (timeEmployee < 3) {
    const newSalary = salary + adjustment3Years;
    console.log(`Time Worked ${timeEmployee} Years.`);
    console.log(`Salary adjustment of 3% : ${newSalary}.`)
} else {
    if ((3 < timeEmployee) && (timeEmployee < 10)) {
        const newSalary = salary + adjustment10Years;
        console.log(`Time Worked ${timeEmployee} Years.`);
        console.log(`Salary adjustment of 12.5% : ${newSalary}.`)
    } else {
        const newSalary = salary + adjustmentMoreYears;
        console.log(`Time Worked ${timeEmployee} Years.`);
        console.log(`Salary adjustment of 20% : ${newSalary}.`)
    }
}
