def on_pin_pressed_p0():
    pass
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_released_p2():
    if pause2 == 1:
        pass
    if pause2 == 0:
        Character.change(LedSpriteProperty.Y, 1)
input.on_pin_released(TouchPin.P2, on_pin_released_p2)

def on_received_number(receivedNumber):
    if receivedNumber == 1:
        Character.change(LedSpriteProperty.X, -1)
    if receivedNumber == 2:
        Character.change(LedSpriteProperty.X, 1)
    if receivedNumber == 3:
        Character.change(LedSpriteProperty.Y, -1)
    if receivedNumber == 4:
        Character.change(LedSpriteProperty.Y, 1)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    if pause2 == 1:
        pass
    if pause2 == 0:
        Character.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if pause2 == 1:
        pass
    if pause2 == 0:
        Character.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if pause2 == 0:
        Character.change(LedSpriteProperty.X, 1)
    if pause2 == 1:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_released_p1():
    if pause2 == 0:
        Character.change(LedSpriteProperty.Y, -1)
    if pause2 == 1:
        pass
input.on_pin_released(TouchPin.P1, on_pin_released_p1)

def on_logo_pressed():
    if pause2 == 0:
        Character.change(LedSpriteProperty.Y, -1)
    if pause2 == 1:
        pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

sound1 = 0
Pain = 0
Keys = 0
Key_3_last = 0
Egg = 0
Room = 0
Time_Passed = 0
score_for_keys = 0
pause2 = 0
Character: game.LedSprite = None
Point = 0
Game_2 = 0
Game_1 = 0
Key_3 = 0
Key2 = 0
Key_1 = 0
Character = game.create_sprite(2, 2)
Start_Time = input.running_time()
RESET = 0
radio.set_group(167)

def on_forever():
    global Time_Passed, Room, Key_3_last, score_for_keys, pause2, Egg, Keys, Pain, sound1
    if score_for_keys == 3:
        Time_Passed = (input.running_time() - Start_Time) / 1000
        basic.show_string("YOU WIN")
        basic.show_string("" + str((Time_Passed)))
        basic.show_string("SCORE 3")
        control.reset()
    if Room == 0:
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
        if Egg == 0:
            led.plot(4, 2)
        if Character.get(LedSpriteProperty.X) == 4:
            if Character.get(LedSpriteProperty.Y) == 2:
                if Egg == 1:
                    if Character.get(LedSpriteProperty.X) == 4:
                        if Character.get(LedSpriteProperty.Y) == 2:
                            Room = 42
        if Character.get(LedSpriteProperty.X) == 2:
            if Character.get(LedSpriteProperty.Y) == 4:
                Room = 66
                Character.set(LedSpriteProperty.Y, 1)
        if Character.get(LedSpriteProperty.X) == 0:
            Character.set(LedSpriteProperty.X, 1)
        if Character.get(LedSpriteProperty.X) == 4:
            Character.set(LedSpriteProperty.X, 3)
        if Character.get(LedSpriteProperty.Y) == 4:
            if Character.get(LedSpriteProperty.X) == 1:
                Character.set(LedSpriteProperty.Y, 3)
        if Character.get(LedSpriteProperty.Y) == 4:
            if Character.get(LedSpriteProperty.X) == 3:
                Character.set(LedSpriteProperty.Y, 3)
        if Character.get(LedSpriteProperty.Y) == 0:
            if Character.get(LedSpriteProperty.X) == 3:
                Character.set(LedSpriteProperty.Y, 1)
        if Character.get(LedSpriteProperty.Y) == 0:
            if Character.get(LedSpriteProperty.X) == 1:
                Character.set(LedSpriteProperty.Y, 1)
        if Character.get(LedSpriteProperty.Y) == 0:
            if Character.get(LedSpriteProperty.X) == 2:
                Character.set(LedSpriteProperty.Y, 3)
                Room = 1
    if Room == 1:
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
        if Character.get(LedSpriteProperty.X) == 1:
            Character.set(LedSpriteProperty.X, 2)
        if Character.get(LedSpriteProperty.X) == 3:
            Character.set(LedSpriteProperty.X, 2)
        if Character.get(LedSpriteProperty.Y) == 4:
            Room = 0
            Character.set(LedSpriteProperty.Y, 1)
        if Character.get(LedSpriteProperty.Y) == 0:
            Room = 2
            Character.set(LedSpriteProperty.Y, 3)
    if Room == 2:
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
        if Key_3_last == 0:
            led.plot(3, 2)
        if Character.get(LedSpriteProperty.X) == 3 and Character.get(LedSpriteProperty.Y) == 2:
            if Key_3_last == 0:
                radio.send_number(0)
                Key_3_last = 1
                score_for_keys += 1
                pause2 = 1
                music.set_volume(30)
                music.play_melody("- E G B C5 - A G ", 120)
                pause2 = 0
                radio.send_number(7)
        if Character.get(LedSpriteProperty.X) == 0:
            if Character.get(LedSpriteProperty.Y) == 2:
                Room = 3
                Character.set(LedSpriteProperty.X, 3)
        if Character.get(LedSpriteProperty.X) == 2:
            if Character.get(LedSpriteProperty.Y) == 0:
                Character.set(LedSpriteProperty.Y, 3)
                Character.set(LedSpriteProperty.X, 2)
                basic.pause(100)
                Room = 0
        if Character.get(LedSpriteProperty.X) == 1:
            if Character.get(LedSpriteProperty.Y) == 1:
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
        if Character.get(LedSpriteProperty.X) == 3:
            if Character.get(LedSpriteProperty.Y) == 1:
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
        if Character.get(LedSpriteProperty.X) == 3:
            if Character.get(LedSpriteProperty.Y) == 3:
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
        if Character.get(LedSpriteProperty.X) == 1:
            if Character.get(LedSpriteProperty.Y) == 3:
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
        if Character.get(LedSpriteProperty.X) == 4:
            Room = 3
            Character.set(LedSpriteProperty.X, 1)
        if Character.get(LedSpriteProperty.Y) == 4:
            Room = 1
            Character.set(LedSpriteProperty.Y, 1)
    if Room == 3:
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
        if Character.get(LedSpriteProperty.X) == 1:
            if Character.get(LedSpriteProperty.Y) == 4:
                if Egg == 0:
                    radio.send_number(0)
                    Egg = 1
                    pause2 = 1
                    music.set_volume(30)
                    music.play_melody("C5 A C5 G C5 A G C5 ", 120)
                    pause2 = 0
                    radio.send_number(7)
        if Keys == 0:
            led.plot(2, 2)
        if Character.get(LedSpriteProperty.X) == 2 and Character.get(LedSpriteProperty.Y) == 2:
            if Keys == 0:
                Keys = 1
                score_for_keys += 1
                music.set_volume(30)
                music.play_melody("- E G B C5 - A G ", 120)
        if Character.get(LedSpriteProperty.Y) == 1:
            Character.set(LedSpriteProperty.Y, 2)
        if Character.get(LedSpriteProperty.Y) == 3:
            Character.set(LedSpriteProperty.Y, 2)
        if Character.get(LedSpriteProperty.X) == 4:
            if Character.get(LedSpriteProperty.Y) == 2:
                Room = 2
                Character.set(LedSpriteProperty.X, 1)
        if Character.get(LedSpriteProperty.X) == 0:
            if Character.get(LedSpriteProperty.Y) == 2:
                Room = 2
                Character.set(LedSpriteProperty.X, 3)
    if Room == 66:
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
        if Pain == 0:
            led.plot(1, 1)
        if Character.get(LedSpriteProperty.X) == 1 and Character.get(LedSpriteProperty.Y) == 1:
            if Pain == 0:
                radio.send_number(0)
                score_for_keys += 1
                Pain = 1
                pause2 = 1
                music.set_volume(30)
                music.play_melody("- E G B C5 - A G ", 120)
                pause2 = 0
                radio.send_number(7)
        if Character.get(LedSpriteProperty.X) == 2:
            if Character.get(LedSpriteProperty.Y) == 0:
                Room = 0
                Character.set(LedSpriteProperty.Y, 3)
        if Character.get(LedSpriteProperty.X) == 0:
            Character.set(LedSpriteProperty.X, 1)
        if Character.get(LedSpriteProperty.X) == 4:
            Character.set(LedSpriteProperty.X, 3)
        if Character.get(LedSpriteProperty.Y) == 0:
            if Character.get(LedSpriteProperty.X) == 1:
                Character.set(LedSpriteProperty.Y, 1)
            if Character.get(LedSpriteProperty.X) == 3:
                Character.set(LedSpriteProperty.Y, 1)
        if Character.get(LedSpriteProperty.Y) == 4:
            Room = 3
            basic.pause(100)
            Character.set(LedSpriteProperty.Y, 0)
    if Room == 42:
        Character.set(LedSpriteProperty.Y, 2)
        Character.set(LedSpriteProperty.X, 2)
        music.set_volume(30)
        music.play_melody("C5 C5 A B C5 A G E ", 120)
        music.play_melody("C C E D C E F A ", 120)
        sound1 = 0
        basic.pause(500)
        Time_Passed = (input.running_time() - Start_Time) / 1000
        basic.show_string("TRUE WINNER")
        basic.show_string("" + str((Time_Passed)))
        basic.show_string("SCORE 100")
        control.reset()
basic.forever(on_forever)
