const width = 4;
const lenght = 20;
const area = width * lenght;
if (area < 100) {
    console.log(`The measure of your terrain it's ${area} m², it is classified : popular terrain! `)
} else {
    if ((100 < area) && (area < 500)) {
        console.log(`The measure of your terrain it's ${area} m², it is classified : master terrain!`)
    } else {
        console.log(`The measure of your terrain it's ${area} m², it is classified : VIP terrain!`)
    }
}
