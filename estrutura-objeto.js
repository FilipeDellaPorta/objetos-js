const estudante = { 
    nome : 'José Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript'
}

console.log(estudante.nome) // notação de ponto para acessar propriedade (chave + valor) de um objeto
console.log(`o nome de estudante é ${estudante.nome}`)
                                                  // substring excluí o último. 0-3 pegará os caracteres de índice 0 até 2
console.log(`os três primeiros números do cpf são ${estudante.cpf.substring(0, 3)}`) 