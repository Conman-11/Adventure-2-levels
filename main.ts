input.onPinPressed(TouchPin.P0, function () {
	
})
input.onPinReleased(TouchPin.P2, function () {
    if (pause2 == 1) {
    	
    }
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.Y, 1)
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Character.change(LedSpriteProperty.X, -1)
    }
    if (receivedNumber == 2) {
        Character.change(LedSpriteProperty.X, 1)
    }
    if (receivedNumber == 3) {
        Character.change(LedSpriteProperty.Y, -1)
    }
    if (receivedNumber == 4) {
        Character.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    if (pause2 == 1) {
    	
    }
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (pause2 == 1) {
    	
    }
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.X, 1)
    }
    if (pause2 == 1) {
    	
    }
})
input.onPinReleased(TouchPin.P1, function () {
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.Y, -1)
    }
    if (pause2 == 1) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (pause2 == 0) {
        Character.change(LedSpriteProperty.Y, -1)
    }
    if (pause2 == 1) {
    	
    }
})
let sound1 = 0
let Pain = 0
let Keys = 0
let Key_3_last = 0
let Egg = 0
let Time_Passed = 0
let score_for_keys = 0
let Fourth_Key2 = 0
let Third_Key2 = 0
let Second_Key2 = 0
let first_key_2 = 0
let Room = 0
let _2nd = 0
let pause2 = 0
let Character: game.LedSprite = null
let Point = 0
let Game_2 = 0
let Game_1 = 0
let Key_3 = 0
let Key2 = 0
let Key_1 = 0
Character = game.createSprite(2, 2)
let Start_Time = input.runningTime()
let RESET = 0
let LEVEL = 0
radio.setGroup(167)
basic.forever(function () {
    if (LEVEL == 1) {
        if (_2nd == 4) {
            basic.showString("YOU WIN")
            control.reset()
        }
        if (Room == 0) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(0, 1)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(3, 0)
            led.plot(4, 3)
            led.plot(3, 4)
            led.plot(4, 4)
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(1, 4)
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    Character.set(LedSpriteProperty.X, 3)
                    Character.set(LedSpriteProperty.Y, 2)
                    Room = 1
                }
                if (Character.get(LedSpriteProperty.Y) > 2) {
                    Character.set(LedSpriteProperty.X, 1)
                }
                if (Character.get(LedSpriteProperty.Y) < 2) {
                    Character.set(LedSpriteProperty.X, 1)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    Character.set(LedSpriteProperty.X, 1)
                    Character.set(LedSpriteProperty.Y, 2)
                    Room = 2
                }
                if (Character.get(LedSpriteProperty.Y) > 2) {
                    Character.set(LedSpriteProperty.X, 3)
                }
                if (Character.get(LedSpriteProperty.Y) < 2) {
                    Character.set(LedSpriteProperty.X, 3)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 2) {
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 1)
                    Room = 3
                }
                if (Character.get(LedSpriteProperty.X) > 2) {
                    Character.set(LedSpriteProperty.Y, 3)
                }
                if (Character.get(LedSpriteProperty.X) < 2) {
                    Character.set(LedSpriteProperty.Y, 3)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 2) {
                    Character.set(LedSpriteProperty.Y, 3)
                    Character.set(LedSpriteProperty.X, 2)
                    Room = 4
                }
                if (Character.get(LedSpriteProperty.X) > 2) {
                    Character.set(LedSpriteProperty.Y, 1)
                }
                if (Character.get(LedSpriteProperty.X) < 2) {
                    Character.set(LedSpriteProperty.Y, 1)
                }
            }
        }
        if (Room == 1) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(3, 4)
            led.plot(2, 4)
            led.plot(4, 4)
            led.plot(4, 3)
            led.plot(4, 1)
            led.plot(4, 0)
            led.plot(3, 0)
            led.plot(2, 0)
            led.plot(1, 0)
            if (first_key_2 == 0) {
                led.plot(2, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    if (first_key_2 == 0) {
                        first_key_2 = 1
                        _2nd += 1
                        basic.showLeds(`
                            . # . # .
                            . # . # .
                            . . . . .
                            # . . . #
                            . # # # .
                            `)
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Character.set(LedSpriteProperty.Y, 3)
            }
            if (Character.get(LedSpriteProperty.X) == 4 && Character.get(LedSpriteProperty.Y) != 2) {
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.X) == 4 && Character.get(LedSpriteProperty.Y) != 2) {
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.X) == 4 && Character.get(LedSpriteProperty.Y) == 2) {
                Character.set(LedSpriteProperty.X, 1)
                Room = 0
            }
        }
        if (Room == 2) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(4, 2)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(3, 4)
            led.plot(2, 4)
            led.plot(4, 4)
            led.plot(4, 3)
            led.plot(4, 1)
            led.plot(4, 0)
            led.plot(3, 0)
            led.plot(2, 0)
            led.plot(1, 0)
            if (Second_Key2 == 0) {
                led.plot(2, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    if (Second_Key2 == 0) {
                        Second_Key2 = 1
                        _2nd += 1
                        basic.showLeds(`
                            . # . # .
                            . # . # .
                            . . . . .
                            # . . . #
                            . # # # .
                            `)
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0 && Character.get(LedSpriteProperty.Y) == 1) {
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.X) == 0 && Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.X) == 0 && Character.get(LedSpriteProperty.Y) == 2) {
                Character.set(LedSpriteProperty.X, 3)
                Room = 0
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Room == 3) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(4, 2)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(3, 4)
            led.plot(2, 4)
            led.plot(4, 4)
            led.plot(4, 3)
            led.plot(4, 1)
            led.plot(4, 0)
            led.plot(3, 0)
            led.plot(0, 2)
            led.plot(1, 0)
            if (Third_Key2 == 0) {
                led.plot(2, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    if (Third_Key2 == 0) {
                        Third_Key2 = 1
                        _2nd += 1
                        basic.showLeds(`
                            . # . # .
                            . # . # .
                            . . . . .
                            # . . . #
                            . # # # .
                            `)
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Character.set(LedSpriteProperty.Y, 3)
            }
            if (Character.get(LedSpriteProperty.Y) == 0 && Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 0 && Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 0 && Character.get(LedSpriteProperty.X) == 2) {
                Character.set(LedSpriteProperty.Y, 3)
                Room = 0
            }
        }
        if (Room == 4) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(4, 2)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(3, 4)
            led.plot(2, 0)
            led.plot(4, 4)
            led.plot(4, 3)
            led.plot(4, 1)
            led.plot(4, 0)
            led.plot(3, 0)
            led.plot(0, 2)
            led.plot(1, 0)
            if (Fourth_Key2 == 0) {
                led.plot(2, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    if (Fourth_Key2 == 0) {
                        Fourth_Key2 = 1
                        _2nd += 1
                        basic.showLeds(`
                            . # . # .
                            . # . # .
                            . . . . .
                            # . . . #
                            . # # # .
                            `)
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 4 && Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 3)
            }
            if (Character.get(LedSpriteProperty.Y) == 4 && Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 3)
            }
            if (Character.get(LedSpriteProperty.Y) == 4 && Character.get(LedSpriteProperty.X) == 2) {
                Character.set(LedSpriteProperty.Y, 1)
                Room = 0
            }
        }
    }
    if (LEVEL == 0) {
        if (score_for_keys == 3) {
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.X, 2)
            Time_Passed = (input.runningTime() - Start_Time) / 1000
            basic.showString("YOU WIN")
            basic.showString("" + (Time_Passed))
            basic.showString("SCORE 3")
            Room = 0
            LEVEL = 1
        }
        if (Room == 0) {
            led.plot(0, 0)
            led.plot(1, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(1, 4)
            led.plot(3, 4)
            led.plot(4, 4)
            led.plot(4, 3)
            led.plot(4, 1)
            if (Egg == 0) {
                led.plot(4, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    if (Egg == 1) {
                        if (Character.get(LedSpriteProperty.X) == 4) {
                            if (Character.get(LedSpriteProperty.Y) == 2) {
                                Room = 42
                            }
                        }
                    }
                }
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    Room = 66
                    Character.set(LedSpriteProperty.Y, 1)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    Character.set(LedSpriteProperty.Y, 3)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                if (Character.get(LedSpriteProperty.X) == 3) {
                    Character.set(LedSpriteProperty.Y, 3)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 3) {
                    Character.set(LedSpriteProperty.Y, 1)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    Character.set(LedSpriteProperty.Y, 1)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 2) {
                    Character.set(LedSpriteProperty.Y, 3)
                    Room = 1
                }
            }
        }
        if (Room == 1) {
            led.plot(1, 0)
            led.plot(1, 1)
            led.plot(1, 2)
            led.plot(1, 3)
            led.plot(1, 4)
            led.plot(3, 0)
            led.plot(3, 1)
            led.plot(3, 2)
            led.plot(3, 3)
            led.plot(3, 4)
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.X, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.X, 2)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Room = 0
                Character.set(LedSpriteProperty.Y, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Room = 2
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Room == 2) {
            led.plot(1, 0)
            led.plot(1, 1)
            led.plot(0, 1)
            led.plot(3, 0)
            led.plot(3, 1)
            led.plot(4, 1)
            led.plot(0, 3)
            led.plot(1, 3)
            led.plot(1, 4)
            led.plot(3, 3)
            led.plot(3, 4)
            led.plot(4, 3)
            if (Key_3_last == 0) {
                led.plot(3, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 3 && Character.get(LedSpriteProperty.Y) == 2) {
                if (Key_3_last == 0) {
                    radio.sendNumber(0)
                    Key_3_last = 1
                    score_for_keys += 1
                    pause2 = 1
                    music.playMelody("- E G B C5 - A G ", 120)
                    pause2 = 0
                    radio.sendNumber(7)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    Room = 3
                    Character.set(LedSpriteProperty.X, 3)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    Character.set(LedSpriteProperty.Y, 3)
                    Character.set(LedSpriteProperty.X, 2)
                    basic.pause(100)
                    Room = 0
                }
            }
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 2)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                if (Character.get(LedSpriteProperty.Y) == 1) {
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 2)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                if (Character.get(LedSpriteProperty.Y) == 3) {
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 2)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 3) {
                    Character.set(LedSpriteProperty.X, 2)
                    Character.set(LedSpriteProperty.Y, 2)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Room = 3
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Room = 1
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Room == 3) {
            led.plot(0, 1)
            led.plot(1, 1)
            led.plot(2, 1)
            led.plot(3, 1)
            led.plot(4, 1)
            led.plot(0, 3)
            led.plot(1, 3)
            led.plot(2, 3)
            led.plot(3, 3)
            led.plot(4, 3)
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    if (Egg == 0) {
                        radio.sendNumber(0)
                        Egg = 1
                        pause2 = 1
                        music.playMelody("C5 A C5 G C5 A G C5 ", 120)
                        pause2 = 0
                        radio.sendNumber(7)
                    }
                }
            }
            if (Keys == 0) {
                led.plot(2, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 2 && Character.get(LedSpriteProperty.Y) == 2) {
                if (Keys == 0) {
                    Keys = 1
                    score_for_keys += 1
                    music.playMelody("- E G B C5 - A G ", 120)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.Y, 2)
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    Room = 2
                    Character.set(LedSpriteProperty.X, 1)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    Room = 2
                    Character.set(LedSpriteProperty.X, 3)
                }
            }
        }
        if (Room == 66) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
            led.plot(1, 0)
            led.plot(3, 0)
            led.plot(4, 0)
            led.plot(4, 1)
            led.plot(4, 2)
            led.plot(4, 3)
            led.plot(4, 4)
            if (Pain == 0) {
                led.plot(1, 1)
            }
            if (Character.get(LedSpriteProperty.X) == 1 && Character.get(LedSpriteProperty.Y) == 1) {
                if (Pain == 0) {
                    radio.sendNumber(0)
                    score_for_keys += 1
                    Pain = 1
                    pause2 = 1
                    music.playMelody("- E G B C5 - A G ", 120)
                    pause2 = 0
                    radio.sendNumber(7)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 2) {
                if (Character.get(LedSpriteProperty.Y) == 0) {
                    Room = 0
                    Character.set(LedSpriteProperty.Y, 3)
                }
            }
            if (Character.get(LedSpriteProperty.X) == 0) {
                Character.set(LedSpriteProperty.X, 1)
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                Character.set(LedSpriteProperty.X, 3)
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    Character.set(LedSpriteProperty.Y, 1)
                }
                if (Character.get(LedSpriteProperty.X) == 3) {
                    Character.set(LedSpriteProperty.Y, 1)
                }
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Room = 3
                basic.pause(100)
                Character.set(LedSpriteProperty.Y, 0)
            }
        }
        if (Room == 42) {
            Character.set(LedSpriteProperty.Y, 2)
            Character.set(LedSpriteProperty.X, 2)
            music.playMelody("C5 C5 A B C5 A G E ", 120)
            music.playMelody("C C E D C E F A ", 120)
            sound1 = 0
            basic.pause(500)
            Time_Passed = (input.runningTime() - Start_Time) / 1000
            basic.showString("TRUE WINNER")
            basic.showString("" + (Time_Passed))
            basic.showString("SCORE 100")
            control.reset()
        }
    }
})
