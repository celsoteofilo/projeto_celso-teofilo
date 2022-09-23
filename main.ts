let direcao = 0
//  Aqui  a placa  eviara um sinal pelo rele acionando o botao 'A'
//  emitindo um sinal sonoro.
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    music.playMelody("- - A A A A - - ", 120)
})
//  Aqui  o dispositivo vai nos mostra a posicao de orinetacao.
//  Usaremos o display.
basic.forever(function on_forever() {
    
    direcao = input.compassHeading()
    if (direcao == 338 || direcao < 21) {
        //  Atribuimos uma variável direção, usando.
        basic.showString("N")
    } else if (direcao == 22 || direcao < 67) {
        basic.showString("NE")
    } else if (direcao == 68 || direcao < 111) {
        basic.showString("L")
    } else if (direcao == 112 || direcao < 157) {
        basic.showString("SE")
    } else if (direcao == 158 || direcao < 202) {
        basic.showString("S")
    } else if (direcao == 203 || direcao < 247) {
        basic.showString("SO")
    } else {
        basic.showString("NO")
    }
    
})
