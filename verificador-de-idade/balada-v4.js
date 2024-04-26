const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question(`Qual é o nome da pessoa?\n\n`, nome => {
    readline.question(`Olá ${nome}, qual é a sua idade?\n\n`, idade => {
        let podeEntrar = podeEntrarNaBalada(idade)

        if (podeEntrar) {
            console.log(`Segurança permitiu a entrada porque a pessoa tem ${idade} anos!`)
            console.log('Curta a balada com moderação!')
        } else {
            if (idade > 60) {
                console.log(`Segurança barra a entrada porque a pessoa tem mais de 60 anos, idade atual: ${idade}!`)
            } else {
                console.log(`Segurança barra a entrada porque a pessoa tem ${idade}, anos ⚠`)
            }
        }
        console.log('--------------------------------------------------')
        readline.close();
    })
})



// boolean
function podeEntrarNaBalada(idade) {
    if (idade >= 18 && idade <= 60) {
        return true
    } else {
        return false
    }
}