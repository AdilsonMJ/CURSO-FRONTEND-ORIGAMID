// This e a funcao Bind
const pessoa = { 
     saudacao: 'Bom dia',
     falar(){
         console.log(this.saudacao)
     }
 }
 pessoa.falar()
 
 const falarDePessoa2 = pessoa.falar
 falarDePessoa2() // undefined, gera conflito entre funcao e OO, deve ser usar bind pois aqui ele perde a referencia do this.
 
 const falarDePessoa = pessoa.falar.bind(pessoa) // passo um objeto que quero preservar o this.
 falarDePessoa()
 
 // This e a funcao Bind 2
 
 function People(){
     this.age = 1
 
     const self = this
     setInterval(function() {
         self.age++
         console.log(self.age)
     }/*.bind(this)*/, 1000)  //Dispara  outra funcao dentro de um determinado tempo.
 }
         
 new People
