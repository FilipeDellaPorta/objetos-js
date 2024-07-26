const estudante = { 
    nome : 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55139999999', '55139999998'],
    media: 7.5,
    estaAprovado: function(mediaBase) { //não poderia ser trocado por uma arrow function, pois ela não entende o contexto (this)
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7))