/*
IIFE -> Immediately Invoked function expression
Funcao auto invocada é uma funcao que ao criar ela, vc ja chama ela no parametros.
Quando esta usando browser é quer fugir do scropo global. tudo que for criado dentro dela, sera de scropo da funcao e nao global. 
*/

(  function(){
          console.log('Será executado na hora!')
          console.log('Foge do escopo mais abrangente')
     })()

