let idade = [18, 60, 2000, 61, 24, 77]


for (let i = 0; i < idade.length; i++) {
    console.log('Inicio do programa!')

    console.log('Vai até a Balada...')

    podeEntrar = podeEntrarNaBalada(idade[i])

    if (podeEntrar) {
        console.log(`Segurança permitiu a entrada porque a pessoa tem ${idade[i]} anos!`)
        console.log('Curta a balada com moderação!')
    } else {
        if (idade[i] > 60) {
            console.log(`Segurança barra a entrada porque a pessoa tem mais de 60 anos, idade atual: ${idade[i]}!`)
        } else {
            console.log(`Segurança barra a entrada porque a pessoa tem ${idade[i]}, anos ⚠`)
        }
    }

    console.log('Vai embora para a casa...')

    console.log('Fim do programa!')
    console.log('--------------------------------------------------')
}


// boolean
function podeEntrarNaBalada(idade) {
    if (idade >= 18 && idade <= 60) {
        return true
    } else {
        return false
    }
}