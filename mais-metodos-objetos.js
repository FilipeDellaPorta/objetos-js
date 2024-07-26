// Object.keys() e Object.values(): são usados para extrair informações específicas de um objeto. Esses métodos fornecem, respectivamente, as chaves e os valores presentes em um objeto. São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.

const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]

// Object.entries(): este método retorna um array de arrays que representam pares chave-valor. É útil em situações que demandam iterações mais complexas ou manipulação mais minuciosa dos dados.

const meuObjeto2 = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto2);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]

// Object.assign(): usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto.

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }