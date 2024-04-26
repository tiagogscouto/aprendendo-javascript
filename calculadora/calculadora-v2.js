const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem vindo a calculadora do Tiago!\n\n')
console.log('1- Somar 2- Subtrair 3- Multiplicar 4- Dividir\n')

readline.question(`Qual operação?\n\n`, operacao => {
    readline.question(`Informe o primeiro número?\n\n`, n1Texto => {
        readline.question(`Informe o segundo número?\n\n`, n2Texto => {

            let n1 = Number(n1Texto)
            let n2 = Number(n2Texto)

            if (operacao == 1) {
                console.log('Somando...\n\n')
                console.log(n1 + n2)
            } else if (operacao == 2) {
                console.log('Subtraindo...\n\n')
                console.log(n1 - n2)
            } else if (operacao == 4) {
                if (n2 == 0) {
                    console.log('voce nao pode dividir por 0, isso esta alen dos limites da matematica')
                } else {
                    console.log('Dividindo...\n\n')
                    console.log(n1 / n2)
                }
            } else if (operacao == 3) {
                console.log('Multiplicando...\n\n')
                console.log(n1 * n2)
            } else {
                console.log('voce colocou ' + operacao + ' essa operacao eh invalida')
            }
            readline.close();
        })
    })
})