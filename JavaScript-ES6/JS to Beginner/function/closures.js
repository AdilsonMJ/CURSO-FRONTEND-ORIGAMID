// Closure é o escopo criado quando uma funcao é declarada, esse escipo permite a funcao e manupular variaveis externas a funcao.

const x = 'Global'

function fora(){
     const x = 'local'
     function dentro (){
          return x
     }
     return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())
