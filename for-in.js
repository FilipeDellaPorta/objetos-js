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

for (let chave in estudante) {
    const tipo = typeof estudante[chave]
    if (tipo !== 'object' && tipo !== 'function') { // contornando o erro object Object
        const texto = `a chave ${chave} tem o valor de ${estudante[chave]}` 
        // o erro de object Object em endereços é pela template string ``
        // converter os valores passados em string, incluindo os objetos {} dentro da chave endereço
        console.log(texto)
    }     
}

for (let chave in estudante) { //este não dá erro de object Object, pois não está tentando converter {} objeto em string
    console.log(estudante[chave])
}


