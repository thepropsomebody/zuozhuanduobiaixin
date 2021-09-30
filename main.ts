let distance = 0
microbot.microbotInit()
basic.forever(function () {
    distance = microbot.Ultrasonic()
    if (distance > 0 && distance < 12) {
        microbot.setMotorSpeed(0, 0)
        basic.pause(100)
        microbot.setMotorSpeed(0, 30)
        basic.pause(750)
    } else {
        microbot.setMotorSpeed(50, 50)
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
