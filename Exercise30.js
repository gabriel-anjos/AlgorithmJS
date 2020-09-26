const firstSegment = 1;
const secondSegment = 4;
const thirdSegment = 4;
if ((firstSegment < secondSegment + thirdSegment) && (secondSegment < firstSegment + thirdSegment) && (thirdSegment < firstSegment + secondSegment)) {
    if ((firstSegment == secondSegment) && (secondSegment == thirdSegment)) {
        console.log(`This triangle it's classified: Equilateral!.`)
    } else {
        if ((firstSegment == secondSegment) || (firstSegment == thirdSegment) || (secondSegment == thirdSegment)) {
            console.log(`This triangle it's classified: Isosceles.`)
        } else {
            console.log(`This triangle it's classified: Escalene.`)
        }
    }
} else {
    console.log(`A triangle it is not possible!. `)
}
