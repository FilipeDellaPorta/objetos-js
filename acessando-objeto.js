const estudante = { 
    nome : 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
}

function exibeInfoEstudante(objetoEstudante, infoEstudante) {
    return objetoEstudante[infoEstudante] 
}

console.log(exibeInfoEstudante(estudante, 'nome'))
console.log(exibeInfoEstudante(estudante, 'cpf'))

console.log(estudante['nome'])
console.log(estudante['cpf'])

console.log(estudante.pet) // notação de ponto
console.log(estudante['pet']) // notação de colchete
//não dá erro ao tentar acessar propriedades que não existem, retorna undefined