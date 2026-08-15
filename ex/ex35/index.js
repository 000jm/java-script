
// function carregarDados() {
//     return new Promise((resolve, reject) => {
//         console.log('estamos carregando os dados');
        
//         setTimeout(() => {
//             const certoErrado = true

//             if (certoErrado) {
//                 resolve('deu certo')
//             } else {
//                 reject('deu errado')
//             }
//         }, 3000)
//     })
// }

// const respostaHTML = document.getElementById('valorr')

// carregarDados()
// .then((resposta) => console.log(resposta))
//                 // respostaHTML.innerHTML = resposta
// .catch((erro) => console.log(erro))
//                 // respostaHTML.innerHTML = erro
// console.log(carregarDados());

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then((response) => response.json())
.then(response => console.log(response))
.catch((erro) => console.log(erro))
