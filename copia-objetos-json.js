// Para saber mais: copiando objetos
// PRÓXIMA ATIVIDADE

// É importante entender a forma como os objetos são armazenados e seus valores são copiados com JavaScript. Você pode se deparar com alguns problemas caso não leve esses fatores em consideração.

// Para abordar essa questão, é crucial compreender as diferentes abordagens de cópia de objetos. Em JavaScript, a simples atribuição de um objeto a uma nova variável cria uma "referência", não uma cópia independente. Isso significa que alterações em uma variável afetarão diretamente a outra.

// Exemplo de referência:

const objetoOriginal = { chave: 'valor' };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: novoValor

// Uma abordagem comum para realizar cópias de objetos é através da técnica conhecida como "clonagem profunda". Essa técnica assegura que a cópia seja independente do objeto original, evitando referências compartilhadas e garantindo a integridade dos dados.

// Exemplo de clonagem profunda com JSON.stringify e JSON.parse:

const objetoOriginal2 = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal2));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal2.chave); // Saída: valor

// Explorar essas práticas de cópia de objetos proporciona uma base sólida para lidar com estruturas de dados no JavaScript, mitigando possíveis armadilhas relacionadas a referências e garantindo um código mais robusto e previsível.

// Pensando nisso, separamos para você um artigo sobre clonagem profunda com imutabilidade. Ele está presente na nossa plataforma e é uma leitura interessante agora que você já teve um bom contato com os objetos em JavaScript.