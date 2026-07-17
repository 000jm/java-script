
// function falarMeuNome() {
//     console.log('meu nome é joao miguel')
// }

// function falarMeuNomeCompleto(falarMeuNome) {
//     falarMeuNome()
//     console.log('da silva albuquerque')
// }

// falarMeuNomeCompleto(falarMeuNome)

// umaFuncao()

// function umaFuncao() {
//     console.log(`hello world`)
// }

// let outraFuncao

// console.log('dasdadas');

// outraFuncao = () => console.log(`hello mundo`)

// umaFuncao()

// function funcao01() {
//     console.log(this)
// }

// const funcao02 = () => {
//     console.log(this)
// }

// const jm = {
//     nome: 'joao miguel',
//     funcao01,
//     funcao02
// }

// jm.funcao01()
// jm.funcao02()

// function soma(x) {
//     return (y) => x + y
// }

// const somaParcial = soma(10)

// console.log(somaParcial(20))
// console.log(somaParcial(30))
// console.log(somaParcial(40))

// const pessoa = {
//     nome: 'miguel',
//     idade: 11
// }

// function falar(prefixo) {
//     console.log(prefixo, this.nome)
// }

// falar.apply(pessoa, ['ola'])
// falar.call(pessoa, 'ola')

function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function calcular(x, operacao, y) {
    console.log(operacao(x, y))
}

calcular(10, adicao, 10)
calcular(10, multiplicacao, 10)
