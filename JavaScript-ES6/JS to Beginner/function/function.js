console.log("Function part 1" )

function square(side1, side2){
    return side1 + side2
}
console.log(square(3, 4))

// When I'm creating a function, I can set parametros.  Side1 Side2 
// When I'm running a function, I can pass the arguments.  square(3,4) 


addEventListener('click', function() {
     console.log('hello')
});
// function () {}  or   () => {}


function imc(peso, altura){
    const imc = peso / (altura**2);
    console.log(imc);
}

imc(80, 1.73);


function terceiraIdade (idade){
    if(typeof idade !== 'number'){
        return "Informe a sua idade!";
    } else if(idade >= 60){
        return true
    } else {
        return false;
    }
}

console.log(terceiraIdade(92))

function faltaVisitar(paisesVisitados){
    const  paises = 206;
    return `Falta visitar ${paises - paisesVisitados} paises`;
}

console.log(faltaVisitar(100))

//ARROW FUNCTIONS

function sum (a, b){
    return a + b
}

let sum2 = (a, b) => {
    return a + b
}

let sum3 = (a, b) => a + b

let sum4 = a => a >= 0
let sum5 = b => b >= 0

function randomNumber(){
    return Math.random
}

let randomNumber2 = () =>  Math.random

document.addEventListener('click',  () => console.log('Click'))



// Exercicios

// 1 - Crie uma funcao que verifique se o valor é truthy 
    function isTruthy(valor) {
        return !!valor;
    }
    console.log(isTruthy("ds"));

    // 2 - Crie uma funcao matematica que retorne o perimetro de um quadrado 
    function quadrado (lado)  { return lado * 4}
console.log(quadrado(3))

//Crie uma funcao que retorne nome completo

function nomeCompleto(name, suname){
    return `${name} ${suname}`;
}

console.log(nomeCompleto('Adilson', 'Jäger'));

// Crie uma funcao que verifique se o numero é par
function numeroPar(numero){
    let n = numero % 2;
    let p = (n === 0) ? "par" : "ímpar";
    return p;
}

console.log(numeroPar(3))

// Crie uma funcao que retorne tipo do dado.
function tipoDado(n){
    return typeof(n)
}
console.log(tipoDado(3))

//Usar evento que mostre nome completo quando mouse mover. 
addEventListener('mousemove', function(){
    console.log("Adilson Magalhaes")
});