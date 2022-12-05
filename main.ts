function setDicePattern () {
    list = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `),
    images.createImage(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
    ]
}
function rollDice () {
    list[randint(0, 5)].showImage(0)
}
input.onGesture(Gesture.Shake, function () {
    rollDice()
})
let list: Image[] = []
setDicePattern()
rollDice()
