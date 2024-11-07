let menu = ``

function triangle(value) {
    const base = prompt('Quanto vale a base?')
    const height = prompt('Quanto vale a altura?')
    return alert("A área do seu triângulo é: " + (value = (base * height) / 2))
}

function rectangle(area) {
    const base = prompt('Quanto vale a base?')
    const height = prompt('Quanto vale a altura?')
    return alert("A área do seu retângulo é: " + (area = base * height))
}

function square(area) {
    const side = prompt('Quanto vale o lado?')
    return alert("A área do seu quadrado é: " + (area = side * side))
}

function trapeze(area) {
    const largerBase = prompt('Defina a base maior.')
    const smallerBase = prompt('Defina a base menor.')
    const height = prompt('Quanto vale a altura?')
    return alert("A área do seu trapézio é: " + (area = ((largerBase + smallerBase) * height) / 2))
}

function circle(area) {
    const radius = prompt('Defina o raio do círculo.')
    return alert("A área do seu círculo é: " + (area = 3.14 * (radius * radius)))
}


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
            triangle(5, 7)
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
