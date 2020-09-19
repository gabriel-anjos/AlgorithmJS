const name = "Gabriel";
const sex = "female";
const shopping = 90
const maleOff = (5 * shopping) / 100;
const femaleOff = (13 * shopping) / 100;
const totalMale = shopping - maleOff;
const toatalFemale = shopping - femaleOff;
if (sex == "male" || sex == "female") {
    if (sex == "male") {
        console.log(`Your shoppings: ${shopping}.`)
        console.log(`Your discount: ${maleOff}.`)
        console.log(`Final cost of your shoppings: ${totalMale}.`)
    } else {
        console.log(`Your shoppings: ${shopping}.`)
        console.log(`Your discount: ${femaleOff}.`)
        console.log(`Final cost of your shoppings: ${toatalFemale}.`)
    }

} else {
    console.log(`"${sex}" it's a wrong value, try male or female.`)
}