const estudante = { 
    nome : 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55139999999', '55139999998'],
    enderecos : [{
        logradouro : 'Rua Saturnino de Brito',
        numero : '45',
        complemento : 'apto 43'
    }]
}

// console.log(estudante.enderecos)
// console.log(estudante.enderecos[0])

estudante.enderecos.push({
    logradouro : 'Rua Arthur Bernardes',
    numero : '12',
    complemento : '' //string vazia é igual a false
})


const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento) //retorna valores true

console.log(listaEnderecosComComplemento)

