const soma = function (x , y ){
     return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
     console.log(operacao(a, b))
}

imprimirResultado(3,4)

/* Funcao anonima é uma funcao sem nome. imprimirResultado passei param operacao é ja definir que caso nada seja passado ela assuma o valor de soma que é uma funcao aninima */

imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function( x, y) {
     return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
     falar: function(){
          console.log('Opa')
     },
     falarNew(){
          console.log('opa')
     }
}
pessoa.falar()
pessoa.falarNew()