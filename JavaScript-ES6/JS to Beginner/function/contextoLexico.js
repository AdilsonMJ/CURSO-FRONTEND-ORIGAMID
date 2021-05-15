const valor = 'Global'
 function minhafuncao(){
      console.log(valor)
 }

 function exec(){
      const valor = 'local'
      minhafuncao()
 }

 exec()

 /* 
     Quando uma funcao é declarada dentro de js, ela nao tem apenas seu conteudo interno o seu nome e paramentros, ela tbm tem conciencia do local que foi definida, funcao carrega com vc o contexto no qual ela foi declarada.

     A cima em exec, o retorno é global pq a funcao carrega seu contexto, entao dentro de funcao nao existe variavel valor local, ela procura em um nivel acima que é global, so depois disso que ela iria procurar dentro da funcao exec.
 */