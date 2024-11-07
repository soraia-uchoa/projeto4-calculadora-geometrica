function triangle(base, altura){
    return base * altura/2
}
function rectangle(base, altura){
    return base * altura
}
function square(lado){
    return lado * lado
}
function trapeze(baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor)*altura/2
}
function circle(raio){
    return 3.14 *(raio*raio)
}
let menu = ''

do {
    menu = prompt(`opção disponivel
    1- área do triângulo
    2- área do retângulo
    3- área do quadrado
    4- área do trapézio
    5- área do cículo 
    6- sair`)

    switch (menu) {
        case '1':
            triangle()
            break
        case '2':
            rectangle()
            break
        case '3':
            square()
            break
        case '4':
            trapeze()
            break
        case '5':
            circle()
            break
        case '6':
            alert('acabouu!!')
            break
    }

} while (menu !== "6")
