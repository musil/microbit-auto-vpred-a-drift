input.onButtonPressed(Button.A, function () {
    wuKong.mecanumRun(wuKong.RunList.Front, 50)
    basic.pause(2000)
    wuKong.mecanumSpin(wuKong.TurnList.Left, 70)
    basic.pause(2000)
    wuKong.mecanumDrift(wuKong.TurnList.Left)
    basic.pause(2000)
    wuKong.mecanumRun(wuKong.RunList.stop, 0)
})
input.onButtonPressed(Button.B, function () {
    wuKong.mecanumRun(wuKong.RunList.stop, 0)
})
basic.forever(function () {
	
})
