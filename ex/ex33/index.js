

function salvarNome() {
    const nome = document.getElementById('in').value
    const div = document.getElementById('mensagem')
    const usuaryName = localStorage.setItem('usuaryNam', nome)
    const msg = localStorage.getItem('usuaryName')
    if (msg) {
        div.innerHTML = `hi, ${nome}`
    } else {
        div.innerHTML = `please, try again`
    }
}

