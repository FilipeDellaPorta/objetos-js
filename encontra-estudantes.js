const estudantes = require('./estudantes.json')

function buscaInformacoes(lista, chave, valor) {
    // return lista.find((estudante) => estudante[chave] === valor) não funciona para comprar com a chave telefone
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInformacoes(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)

const telefoneEncontrado = buscaInformacoes(estudantes, 'telefone', '4733865848')
console.log(telefoneEncontrado)