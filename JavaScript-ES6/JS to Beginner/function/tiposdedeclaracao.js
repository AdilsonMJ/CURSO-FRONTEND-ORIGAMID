/* 
     O interpretador de js ler todas as funcoes antes de começar a roda codigo, entao eu posso chamar uma funcao antes mesmo dela estar criada. Isso funciona apenas com a function declaration.
*/

console.log(soma(4,3))
// function declaration
 function soma(x, y){
      return x + y
 }

 // function expression
 const sub = function(x, y){
      return x - y
 }

 // named function expression 
 const mult = function mult(x, y){
      return x * y
 }