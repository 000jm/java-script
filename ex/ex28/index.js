
// const pessoa = {
//     genero: 'feminino',
// }

// const joaoMiguel = {
//     nome: 'joao miguel',
//     idade: 11,
//     __proto__: pessoa
// }

// console.log(joaoMiguel.genero);

// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// Pessoa.prototype.falar = function() {
//     console.log(`meu nome é ${this.nome}`)
// }

// const jm = new Pessoa('joao miguel', 11)

// console.log(jm);
// jm.falar()

// class Pessoa {

//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     falar() {
//         console.log(`meu nome é ${this.nome}`)
//     }

// }


// const Pessoa = {
//     genero: 'masculino'
// }

// const renan = Object.create(Pessoa)

// renan.nome = 'renan'

// console.log(renan.nome)
// console.log(renan.__proto__);


// function Pessoa(nome, idade) {
//     this.nome = nome
//     this.idade = idade
// }

// Pessoa.prototype.falar = function() {
//     console.log(`meu nome é ${this.nome}, e minha idade é ${this.idade}`)
// }

// const jm = {
//     genero: 'masculino'
// }

// Pessoa.call(jm, 'joao miguel', 11)

// console.log(jm)

// String.prototype.toPLang = function() {
//     return `P ${this}`
// }

// console.log('teste'.toPLang())
