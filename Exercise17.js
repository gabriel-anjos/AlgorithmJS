const speed = 81;
const costTicket = 5;
const overSpeed = speed - 80;
const ticket = overSpeed * 5;
if (speed > 80) {
    console.log(`You were fined for over speed.`)
    console.log(`Speed limit: 80 km/h.`)
    console.log(`Your speed: ${speed} km/h.`)
    console.log(`You exceeded: ${overSpeed} km/h of the speed limit.`)
} else {
    console.log(`your speed: ${speed}. Drive safe!`)
} 