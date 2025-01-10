input.onButtonPressed(Button.A, function () {
    speed += 10
    mk6hub.setChannel(mk6hub.Hub.A, mk6hub.Channel.A, speed)
    mk6hub.senddata(mk6hub.Hub.A)
})
input.onButtonPressed(Button.B, function () {
    speed += -10
    mk6hub.setChannel(mk6hub.Hub.A, mk6hub.Channel.A, speed)
    mk6hub.senddata(mk6hub.Hub.A)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    mk6hub.stop(mk6hub.Hub.A)
})
let speed = 0
speed = 0
mk6hub.init(mk6hub.Hub.A)
loops.everyInterval(500, function () {
    basic.showNumber(mk6hub.getversion(mk6hub.Hub.A))
})
