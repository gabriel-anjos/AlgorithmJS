const a = 5;
const b = 3;
const c = 4;

if (a < b + c && b < a + c && c < a + b) {
    console.log(`It is possible to form a triangle!`)
} else {
    console.log(`It is not posssible to form a triangle!`)
}