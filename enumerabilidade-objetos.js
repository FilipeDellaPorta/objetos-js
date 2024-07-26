// Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, como for … in e métodos como Object.keys(). Por padrão, todas as propriedades criadas diretamente em um objeto são enumeráveis, o que significa que elas são visíveis durante a iteração.

const meuObjeto = {
    nome: "ChatGPT",
    linguagem: "JavaScript",
    versao: "3.5"
  };
  
  for (let chave in meuObjeto) {
    console.log(chave); // Saída: nome, linguagem, versao
  }

//   Propriedades não enumeráveis não são consideradas durante operações de iteração. Essas propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não precisam ser expostas durante iterações comuns.

const meuObjeto2 = {};

Object.defineProperty(meuObjeto2, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

for (let chave in meuObjeto2) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}

// Para controlar a enumerabilidade de uma propriedade, a função Object.defineProperty() pode ser utilizada. O segundo argumento desta função permite a configuração de diversas propriedades, incluindo a enumerabilidade.

const meuObjeto3 = {};

Object.defineProperty(meuObjeto3, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

console.log(Object.keys(meuObjeto3)); // Saída: []

const meuObjeto4 = {};

// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto4, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto4)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto4.propriedadeNaoEnumeravel); // Saída: 42

// Neste exemplo, a propriedade propriedadeNaoEnumeravel é configurada com enumerable: true, o que significa que a propriedade será listada quando utilizamos Object.keys(). Mesmo sendo enumerável, o valor da propriedade ainda pode ser acessado normalmente.