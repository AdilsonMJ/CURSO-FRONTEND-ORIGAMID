const prod1 = {
     nome: 'celular',
     preco: 45
}

const prod2 = {
     nome: 'car',
     preco: 4.543
}

// Factory retorna um objeto. 
// Factory simples
function criarPessoa(){
     return{
          nome: 'Adilson',
          sobrenome: 'Jäger'
     }
}

console.log(criarPessoa())


// Exercicio

function criarProduto(produto, preco = 0, disponibilidade){
     return{
          // Se nome do parametro for igual do objeto nao precisa declarar, ex: produto: produto, se fosse diferente o nome ai sim teria que declarar, nome: produto. 
          produto,
          preco,
          disponibilidade,
     }
}

console.log(criarProduto('iphone', 3000, true))
console.log(criarProduto('HUAWEI P SMAT', 0, true))
console.log(criarProduto('nokia 3310', 300, false))
let fuji = new criarProduto('fuji xt1', 400, true)
console.log(fuji)