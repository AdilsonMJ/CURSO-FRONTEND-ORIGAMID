console.log("Object")

// Criar objeto
// var pessoa = {}
// Dot Notation Get -- Acesse propriedades de um objeto utilizando o ponto  . 

//Dentro de objeto temos atributos

var  pessoa = {
     name: 'Adilson',
     idade: 28,
     profissao: 'Fotografo',
     possuiCarro: false,
}

console.log(pessoa.name)
console.log(pessoa.possuiCarro)


var square = {
     sides: 4,
     area: function(lado){
          return lado * lado
     },
     perimetro(lado){
          return this.sides * lado
     }
}



// var height = 16
var menu = {
     width: 800,
     height: 50,
     backgroundColor: '#84E',
     metadeWidth() {
          return this.width / this.height // Se nao usar o this.   ele vai pegar a variavel fora do objeto
     }
}

//Salvando em uma variavel 
var bg = menu.backgroundColor;
//Alterando dados
menu.backgroundColor = '#000'
//Criando uma novo parametro 
menu.color = 'blue'
//Criando uma funcao 
menu.esconder = function(){
     console.log('escondido')
}

// Objeto ja herda algumas funcoes, umas delas é o hasOwnProperty() que verifica se uma propriedade foi criado dentro do objeto (nao funciona se foi herança). EX: menu.hasOwnProperty('color') >   true //// menu.hasOwnProperty('carro') > false 


// Exercicios

// Crie um objeto com seus dados pessoais
var dados = {
     name: 'Adilson',
     sobrenome: 'Jäger',
     idade: 27,
     pais: 'Brasil',
     profissao: 'Fotografo',
     nomeCompleto(){ return `${this.name} ${this.sobrenome}` }
}

// Modifique o atributo profissao para programador 
dados.profissao = 'programado'
// Adicione estado civil 
dados.estadoCivil = 'Casado'


// Crie um objeto de um cachorro que represente um labrador, preto, 10 anos e que lute ao ver um bandido
let cao = { 
     raca: 'labrador',
     cor: 'preto',
     idade: 10,
     lutar(ladrao){
          if(ladrao){
               return 'lutando'
          } 
     }
}