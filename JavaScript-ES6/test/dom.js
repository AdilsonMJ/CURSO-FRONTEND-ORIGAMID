const hrefPagina = location.href;
console.log(hrefPagina);

const elementoAtivo = document.querySelector('.ativo')

if(elementoAtivo) console.log(elementoAtivo.classList[1])
else console.log('Nao existe class ativo')


function callbackteste(){
     console.log('clicou em ', elementoAtivo.innerHTML)
}

elementoAtivo.addEventListener('click', callbackteste)