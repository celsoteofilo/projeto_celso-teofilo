direcao = 0
# Aqui  a placa  eviara um sinal pelo rele acionando o botao 'A'
# emitindo um sinal sonoro.

def on_button_pressed_a():
    music.play_melody("- - A A A A - - ", 120)
input.on_button_pressed(Button.A, on_button_pressed_a)


# Aqui  o dispositivo vai nos mostra a posicao de orinetacao.
# Usaremos o display.

def on_forever():
    global direcao
    direcao = input.compass_heading()
    if direcao == 338 or direcao < 21:
        # Atribuimos uma variável direção, usando.
        basic.show_string("N")
    elif direcao == 22 or direcao < 67:
        basic.show_string("NE")
    elif direcao == 68 or direcao < 111:
        basic.show_string("L")
    elif direcao == 112 or direcao < 157:
        basic.show_string("SE")
    elif direcao == 158 or direcao < 202:
        basic.show_string("S")
    elif direcao == 203 or direcao < 247:
        basic.show_string("SO")
    else:
        basic.show_string("NO")
basic.forever(on_forever)
