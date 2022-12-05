let Score = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Score = Score + 1
        basic.showNumber(Score)
    } else if (input.buttonIsPressed(Button.B)) {
        Score = 0
        basic.showNumber(Score)
    }
})
