const listaDeUsuarios = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 30 },
    { id: 3, nome: 'Charlie', idade: 22 }
  ]

// o método find é menos verboso do que o forEach e nesta situação ambos solucionam o pedido

// function encontrarUsuarioPorId(id) {
//     let usuarioEncontrado = null;
//     listaDeUsuarios.forEach(usuario => {
//       if (usuario.id === id) {
//         usuarioEncontrado = usuario;
//       }
//     });
//     return usuarioEncontrado;
//   }

// const usuarioEncontrado = encontrarUsuarioPorId(2)
// console.log(usuarioEncontrado)

function encontrarUsuarioPorId(id) {
    return listaDeUsuarios.find(usuario => usuario.id === id);
}

const usuarioEncontrado = encontrarUsuarioPorId(2)
console.log(usuarioEncontrado)

