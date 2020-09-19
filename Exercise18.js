const bornYear = 1998;
const voteAge = 17;
const age = 2020 - bornYear;
if ((1900 <= bornYear) && (bornYear < 2020)) {
    if (bornYear > 2003) {
        console.log(`Your age: ${age}.`)
        console.log(`You can not vote yet, you are too young.`)
    } else {
        console.log(`Your age: ${age}.`)
        console.log(`You can vote!`)
    }
} else {
    console.log(`you're supposed to be dead!`)
}
