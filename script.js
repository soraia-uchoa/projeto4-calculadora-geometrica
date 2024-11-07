function triangle(base, altura){
    return alert(base * altura/2)
}
function rectangle(base, altura){
    return alert(base * altura)
}
function square(lado){
    return alert(lado * lado)
}
function trapeze(baseMaior, baseMenor, altura){
    return alert((baseMaior + baseMenor)*altura/2)
}
function circle(raio){
    return alert(3.14 *(raio*raio))
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
            triangle(5, 6)
            break
        case '2':
            rectangle(9, 2)
            break
        case '3':
            square(5)
            break
        case '4':
            trapeze(19, 2, 3)
            break
        case '5':
            circle(9)
            break
        case '6':
            alert('acabouu!!')
            break
    }

} while (menu !== "6")
