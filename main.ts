input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # . . .
        . # . . .
        . # # # .
        . # # # .
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("HELLO!!!")
})
