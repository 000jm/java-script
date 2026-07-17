
// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista.forEach((value, index, array) => {
//     console.log(value, index, array);
// })

// const newList = lista.filter((element) => {
//     return (element % 2 === 0)
// })

// console.log(newList);

// class Pessoa {
//     constructor(name) {
//         this.name = name
//     }
// }

// const lista = [new Pessoa('miguel'), new Pessoa('luis'), new Pessoa('mateus'), new Pessoa('artur'), new Pessoa('joao')]

// console.log(lista);

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista.forEach((value, i, listRef) => {
//     console.log(value + i)
// })

const cb = (value, i, listRef) => {
    console.log(value + i)
}

lista.forEach(cb)

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista)
}
