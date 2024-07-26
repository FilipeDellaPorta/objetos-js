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

const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto)

if (!chavesObjeto.includes('enderecos')) {
    console.error('é necessário ter um endereço cadastrado')
}