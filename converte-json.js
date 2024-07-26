const estudante = require('./estudante.json')
const stringEstudante = JSON.stringify(estudante) //convertendo para string para envio HTTP

// console.log(stringEstudante)
// console.log(typeof stringEstudante) //typeof confirma que foi transformado em string o objeto JSON

// console.log(stringEstudante.nome) //SAÍDA undefined, pois como é uma string não é mais possível manipular como um objeto

const objectEstudante = JSON.parse(stringEstudante) //desconvertendo de string
console.log(objectEstudante)
console.log(typeof objectEstudante)
console.log(objectEstudante.nome)