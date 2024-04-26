let idade = 2000

console.log('Inicio do programa!')

console.log('Vai até a Balada...')

if (idade >= 18 && idade <= 60){
    console.log(`Segurança permitiu a entrada porque a pessoa tem ${idade} anos!`)
    console.log('Curta a balada com moderação!')
} else {
    if(idade > 60){
        console.log('Segurança barra a entrada porque a pessoa tem mais de 60 anos!')
    }else{
        console.log(`Segurança barra a entrada porque a pessoa tem ${idade} anos ⚠`)
    }
}

console.log('Vai embora para a casa...')

console.log('Fim do programa!')