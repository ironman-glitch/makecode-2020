let rotationValue = 0
basic.forever(function () {
    led.plot(2, 2)
    basic.pause(100)
    led.unplot(2, 2)
    basic.pause(100)
})
basic.forever(function () {
    rotationValue = input.rotation(Rotation.Roll)
    if (rotationValue > 30) {
        basic.showIcon(IconNames.Happy)
    } else if (rotationValue < -30) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.clearScreen()
    }
})
