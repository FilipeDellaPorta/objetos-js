const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

console.log(objPersonagem)

delete objPersonagem.aliado //notação de ponto
delete objPersonagem["status"] //notação de colchete
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
console.log(objPersonagem)