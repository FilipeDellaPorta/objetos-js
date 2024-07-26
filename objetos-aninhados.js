const estudante = { 
    nome : 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55139999999', '55139999998']
}

estudante.endereco = {
    logradouro : 'Rua Saturnino de Brito',
    numero : '45',
    complemento : 'apto 43'
}

console.log(estudante.endereco.logradouro)