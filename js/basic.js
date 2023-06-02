console.log('Olá, Javascript!')

var userName = 'Lafaiete'

document.getElementById('user-name').innerHTML = userName


// variaveis //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)

// Operadores Matematicos //

// var n1 = 7
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)


// //somar
// var total = n1 + n2
// console.log(total)

// //subtrair
// var total = n1 - n2
// console.log(total)

// //multiplicar
// var total = n1 * n2
// console.log(total)

// //dividir
// var total = n1 / n2
// console.log(total)

// Operadores de comparação //

// var v1 = 5
// var v2 = '5'

// //exatamente iguais no valor e tipo
// var resultado = v1 === v2
// console.log(resultado)

// //valores iguais ignorando o tipo
// var resultado = v1 == v2
// console.log(resultado)

// //não igual ou diferente
// var resultado = v1 != v2
// console.log(resultado)

// //não igual ou diferente levando em consideração o tipo de dados
// var resultado = v1 !== v2
// console.log(resultado)

// Funções //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 5)

// function boasVindas(nome) {
//     alert(nome + ', seja bem vindo(a)')
// }

// boasVindas('Lafaiete')

// function soma(n1, n2) {
//     return n1 + n2
// }

// var resultado = soma(5, 5)
// console.log(resultado)

// Controle de Fluxos //

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrõnicos
// Para poder comprar em lugar que não aceitem o cartão de débito ou crédito

// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// var saldo = 1000

// function saque(valor){
//     saldo = saldo - valor
// }

// saque(500)
// console.log(saldo)

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então o valor do saque deve ser deduzido do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// var saldo = 1000

// function saque(valor){

//     if (valor  > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     } else {
//         saldo = saldo - valor
//     }
// }

// saque(1001)
// console.log(saldo)

// Cenario 3: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando faço um saque de 701 reais
// Então o valor do saque deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido

// var saldo = 1000

// function saque(valor){

//     if (valor  > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     } else if(valor > 700) {
//         console.log('Valor do saque é superior ao maximo permitido por operação')
//      } else {
//         saldo = saldo - valor
//     }
// }

// saque(701)
// console.log(saldo)

// Arrays //

// var gaveteiro =['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']darth

// console.log(gaveteiro[2])

// var personagens= ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO') //adiciona um item ao array
// personagens.push('R2D2') //adiciona um item ao array


// personagens.pop()  //remove o ultimo item do array

// personagens = personagens.filter(function(p){
//     return p !=='Darth Vader'                   // remove um item especifico do array
// })

// console.log(personagens)

// Controles de Repetição (Loops) //

// var personagens= ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)      // codigo vai ser executado até a condição retornar false
// } 

// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos`)
//     }
// }

// // yoda.nome = 'Mestre Yoda'
// // yoda.idade = 100
// // yoda.jedi = true

// console.log(yoda)
// yoda.mostraIdade()

// Constantes //

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)