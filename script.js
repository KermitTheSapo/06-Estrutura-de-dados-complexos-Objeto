// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMin = {
    nome: "robert",
    idade: 18,
    localizacao: "Recife"
}

console.log(sobreMin.nome)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

sobreMin.comida = "Lasanha"
console.log(sobreMin)

// Remova uma propriedade desse objeto.

delete sobreMin.comida

console.log(sobreMin)

//Mostre no console todas as propriedades desse objeto.

console.log(sobreMin)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.

let cadastro = [{
    nome:"Robert", 
    idade: 18,
    telefone: 81985171055,
    amigos: ["jp", "debora", "pedro", "clara"]
  },

  {
    nome:"Joao", 
    idade: 23,
    telefone:27349827342,
    amigos: ["maria", "pedro", "jp", "debora"],
  },
  
  {
    nome:"maria", 
    idade: 22,
    telefone:234234234234234,
    amigos: ["viktor", "pedro", "joao", "clara"]
  }, 
  {
    nome:"clara", 
    idade: 20,
    telefone: 234234234234,
    amigos: ["João", "maria", "matheus", "teo"]
  }, 
  {
    nome:"Enzo",
    idade: 5,
    telefone: 2342652356122,
    amigos: ["clara", "maria", "joão", "carlos"]
  }
]  


console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[2])


