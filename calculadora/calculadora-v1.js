let n1 = 4
let n2 = 77
let operacao = 'dividir'

if (operacao == 'somar') {
    console.log('somando')
    imprimevaloresimformados(n1, n2)
    console.log(n1 + n2)
} else if (operacao == 'subtrair') {
    console.log('subtraindo')
    imprimevaloresimformados(n1, n2)
    console.log(n1 - n2)
} else if (operacao == 'dividir') {
    if (n2 == 0) {
        console.log('voce nao pode dividir por 0, isso esta alen dos limites da matematica')
    } else {
        console.log('dividindo')
        imprimevaloresimformados(n1, n2)
        console.log(n1 / n2)
    }
} else if (operacao == 'multiplicar') {
    console.log('multiplicando')
    imprimevaloresimformados(n1, n2)
    console.log(n1 * n2)
} else {
    console.log('voce colocou ' + operacao + ' essa operacao eh invalida')
}


function imprimevaloresimformados(n1, n2){
    console.log('n1=' + n1 + ' n2=' + n2)
}