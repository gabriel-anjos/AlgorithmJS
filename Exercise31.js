const rock = "r";
const paper = "p";
const scissor = "s";
const player1 = "s";
const player2 = "r";

if (player1 == player2) {
    console.log(`Try again!`)
} else {
    if ((player1 === "r") || (player1 === "p") || (player1 === "s") && (player2 != player1)) {
        if ((player1 === "r") && (player2 != "p")) {
            console.log(`Player 1 winner!.`)
        } else {
            if ((player1 === "p") && (player2 != "s")) {
                console.log(`Player 1 winner!.`)
            } else {
                if ((player1 === "s") && (player2 != "r")) {
                    console.log(`Player 1 winner!.`)
                } else {
                    console.log(`Player 2 winner!.`)
                }
            }
        }
    }
}