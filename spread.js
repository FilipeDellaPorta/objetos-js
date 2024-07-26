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
    },
    {
        logradouro : 'Rua Arthur Bernardes',
        numero : '12',
        complemento : null
    }]
}   

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`)
    console.log(`ligar para ${telefone2}`)
}

//exibirTelefones(estudante.telefones[0], estudante.telefones[1])
exibirTelefones(...estudante.telefones) // usando spread ... para abrir o conteúdo do array telefones

const dadosEnvio = {
    destinatario : estudante.nome,
    ...estudante.enderecos[0] // espalho o o objeto endereço do do objeto estudante dentro do objeto dadosEnvio
}

console.log(dadosEnvio)