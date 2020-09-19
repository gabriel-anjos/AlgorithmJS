const bornYear = 2003;
const age = 2020 - bornYear;
const militaryService = 18 - age;
if ((1990 <= bornYear) && (bornYear < 2020)) {
    if (bornYear > 2002) {
        console.log(`Your age: ${age}.`)
        console.log(`You can not join to military service yet, ${militaryService} years remains.`)
    } else {
        console.log(`Your age: ${age}.`)
        console.log(`Welcome to military service!`)
    }
} else {
    console.log(`you're probably will have some problems `)
}