/* */

const fabricantes = ["mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
     console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

const notas = [7.7, 6.5, 6, 8, 4, 5, 4, 4.2]

//sem callback
const notasBaixas = []
for (let i in notas){
     if(notas[i]<7)
     notasBaixas.push(notas[i])
}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function(nota){
     return nota < 7
})   // Filter espera um valor boolean, se for true ele adiciona no novo array
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)