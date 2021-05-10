// let dobro = function (a){
//      return 2 * a
// }

// dobro2 = (a) => {
//      return 2 * a
// }

// dobro3 = a => 2 * a

// let ola = function(){
//      return 'ola'
// }

// ola1 = () => 'ola'
// ola = _ => 'ola' 

// function Pessoa(){
//      this.idade = 0
//      setInterval(() => {
//           this.idade++
//           console.log(this.idade)
//      }, 10)
// }
// new Pessoa

let comparaComThis = function (param){
     console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

/*  This varia de acordo com o local chamado, dentro de uma funcao normal ele esta apontado para objeto global ou window no navegador, ja com a funcao arrow o this fica apontado somente pra funcao, nao tendo acesso ao objeto global ou windows.
Arrow function é mais forte que o bind, entao nao tem como mudar o this com bind dentro de uma arrow. */