const hrefPagina = location.href;
console.log(hrefPagina);

const elementoactive = document.querySelector('.active')

if(elementoactive) console.log(elementoactive.classList[1])
else console.log('Nao existe class active')


function callbackteste(){
     console.log('clicou em ', elementoactive.innerHTML)
}

elementoactive.addEventListener('click', callbackteste)