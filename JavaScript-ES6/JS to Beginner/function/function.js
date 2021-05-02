console.log("Function part 1" )
// COD3R
// PART 1
/*
    - funcao em js é  first-class object (Citizens) / Heigher-order function
    - funcao pode retorna funcao, funcao pode ser tratada como dados, salvar em variavel ou ter funcao dentro de funcao. 
*/

//Criar funcao de forma literal... retorno é opcional e caso nao retorne nada o retorno sera undefined. 
function fun1(parametro){
    //argumentos
}

// Armazenar em uma varial 
const fun2 = function(){ }

// Armazenar em um array
//Posso tanto crair dentro do array, quanto pegar de fora e salvar no array
const array = [ function (a, b ) {return a + b }, fun1, fun2]
console.log(array[0](2, 2))

// Armazenar em um atributo de objeto
const obj = {}
obj.speak = function(){
    console.log("Falando")
}

// passar uma funcao como parametro
function run(fun){
    fun()
}
run(function(){console.log("run")})

// uma funcao pode retorna/conter uma funcao
function soma(a, b){
    return  function (c){
        console.log(a + b + c)
    }
}
soma(5,5)(2) //12
const cincoMais = soma(5,5)
cincoMais(3) // 13

//  PART 2

/*
    Paramentros e Retorno sao opcionais
*/

function area(largura, altura){
    const area = largura * altura 
    if(area > 20){
        console.log(`Valor acima do permetido: ${area}m2.`)
    } else{
        return console.log(area)
    }
}

area(5, 20)
area(4,3) 
area(2) // NaN
area() // NaN
area(2,3,4,3) //6, ignora o resto dos parametros passados.



// Tem como acessar argumentos sem terem sido definidos no paramentro, usando o argumentos que é percorre todos os argumentos.
function soma2(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma;
}

console.log(soma2()) // 0
console.log(soma2(2)) // 2
console.log(soma2(2,3,4,3,2,3,4,2,3,2,3,4)) //35
console.log(soma2(2.3,3,43,3, "teste")) // 51.3teste


// Parametro Padrao 
//estrategia 1 para gerar valor Padrao
function soma3(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1 
    return a + b + c
}

console.log(soma3()) //3
console.log(soma3(3))  //5
console.log(soma3(0, 0, 0)) // 3 


// estrategia 2, 3, 4 para gerar valor Padrao
function soma4(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c 
}

console.log(soma4()) // 3
console.log(soma4(3))  //5
console.log(soma4("teste")) //teste11
console.log(soma4(1,2,3))// 6
console.log(soma4(0,0,0))


// Valor padrao do es2015
function soma5(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma5()) // 3
console.log(soma5(3))  //5
console.log(soma5("teste"))  // teste11
console.log(soma5(1,2,3))// 6
console.log(soma5(0,0,0))





// // Origamid 

// function square(side1, side2){
//     return side1 + side2
// }
// console.log(square(3, 4))

// // When I'm creating a function, I can set parametros.  Side1 Side2 
// // When I'm running a function, I can pass the arguments.  square(3,4) 


// addEventListener('click', function() {
//      console.log('hello')
// });
// // function () {}  or   () => {}


// function imc(peso, altura){
//     const imc = peso / (altura**2);
//     console.log(imc);
// }

// imc(80, 1.73);


// function terceiraIdade (idade){
//     if(typeof idade !== 'number'){
//         return "Informe a sua idade!";
//     } else if(idade >= 60){
//         return true
//     } else {
//         return false;
//     }
// }

// console.log(terceiraIdade(92))

// function faltaVisitar(paisesVisitados){
//     const  paises = 206;
//     return `Falta visitar ${paises - paisesVisitados} paises`;
// }

// console.log(faltaVisitar(100))

// //ARROW FUNCTIONS
// //Arrow functions não podem ser usadas como construtores e lançarão um erro quando usadas com o new.

// function sum (a, b){
//     return a + b
// }

// let sum2 = (a, b) => {
//     return a + b
// }

// let sum3 = (a, b) => a + b

// let sum4 = a => a >= 0
// let sum5 = b => b >= 0

// function randomNumber(){
//     return Math.random
// }

// let randomNumber2 = () =>  Math.random

// document.addEventListener('click',  () => console.log('Click'))



// // Exercicios

// // 1 - Crie uma funcao que verifique se o valor é truthy 
//     function isTruthy(valor) {
//         return !!valor;
//     }
//     console.log(isTruthy("ds"));

//     // 2 - Crie uma funcao matematica que retorne o perimetro de um quadrado 
//     function quadrado (lado)  { return lado * 4}
// console.log(quadrado(3))

// //Crie uma funcao que retorne nome completo

// function nomeCompleto(name, suname){
//     return `${name} ${suname}`;
// }

// console.log(nomeCompleto('Adilson', 'Jäger'));

// // Crie uma funcao que verifique se o numero é par
// function numeroPar(numero){
//     let n = numero % 2;
//     let p = (n === 0) ? "par" : "ímpar";
//     return p;
// }

// console.log(numeroPar(3))

// // Crie uma funcao que retorne tipo do dado.
// function tipoDado(n){
//     return typeof(n)
// }
// console.log(tipoDado(3))

// //Usar evento que mostre nome completo quando mouse mover. 
// addEventListener('mousemove', function(){
//     console.log("Adilson Magalhaes")
// });