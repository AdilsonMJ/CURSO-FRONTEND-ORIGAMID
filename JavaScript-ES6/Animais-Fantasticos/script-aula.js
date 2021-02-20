// // // // // // // // // // // // // // // const animais = document.getElementById('animais')
// // // // // // // // // // // // // // // const grid = document.getElementsByClassName('grid-section')
// // // // // // // // // // // // // // // const contato = document.querySelector('.contato') // Retorna o primeiro elemento que combina o seu seletor css

// // // // // // // // // // // // // // // const primeiraLi = document.querySelector('li');
// // // // // // // // // // // // // // // const linksInterno = document.querySelector('[href^="#"]');
// // // // // // // // // // // // // // // const img = document.querySelectorAll('img');


// // // // // // // // // // // // // // // const gridSelectionHTML = document.getElementsByClassName('grid-section');
// // // // // // // // // // // // // // // const gridSelectionNode = document.querySelectorAll('.grid-section');

// // // // // // // // // // // // // // // console.log(gridSelectionHTML) // NAO aceita forEach
// // // // // // // // // // // // // // // console.log(gridSelectionNode) // Aceita forEach

// // // // // // // // // // // // // // // gridSelectionNode.forEach(function(item, index){
// // // // // // // // // // // // // // //      console.log(index, item)
// // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // const arrayGrid = Array.from(gridSelectionHTML); // Crio um  array com tudo do gridSelectionHTML para poder usar o forEach
// // // // // // // // // // // // // // // console.log(arrayGrid)
// // // // // // // // // // // // // // // console.log('+++'.repeat(20))
// // // // // // // // // // // // // // // console.log('+++'.repeat(20))
// // // // // // // // // // // // // // // console.log('+++'.repeat(20))

// // // // // // // // // // // // // // // // Exercicios
// // // // // // // // // // // // // // // const imgsite = document.querySelectorAll('img');
// // // // // // // // // // // // // // // console.log(imgsite);
// // // // // // // // // // // // // // // console.log('+++'.repeat(20))

// // // // // // // // // // // // // // // const imagemAnimais = document.querySelectorAll('img[src^="IMG/imagem"]')
// // // // // // // // // // // // // // // console.log(imagemAnimais)
// // // // // // // // // // // // // // // console.log('+++'.repeat(20))

// // // // // // // // // // // // // // // const link = document.querySelectorAll('[href^="#"]');
// // // // // // // // // // // // // // // console.log(link)
// // // // // // // // // // // // // // // console.log('+++'.repeat(20))

// // // // // // // // // // // // // // // const h2Animais =  document.querySelector('.animais-descricao h2');
// // // // // // // // // // // // // // // console.log(h2Animais)
// // // // // // // // // // // // // // // console.log('---'.repeat(20))
// // // // // // // // // // // // // // // const animais2 =  document.querySelector('.animais-descricao');
// // // // // // // // // // // // // // // const h2Animais2 =  animais2.querySelector('h2')
// // // // // // // // // // // // // // // console.log(animais2)
// // // // // // // // // // // // // // // console.log(h2Animais2)

// // // // // // // // // // // // // // // //selecione o ultimo p do site 
// // // // // // // // // // // // // // // const paragrafos = document.querySelectorAll('p');
// // // // // // // // // // // // // // // console.log(paragrafos[paragrafos.length -1])




// // // // // // // // // // // // // // // //NodeList
// // // // // // // // // // // // // // // const imgs = document.querySelectorAll('img');

// // // // // // // // // // // // // // // imgs.forEach(function(item, index, array){
// // // // // // // // // // // // // // //      console.log(item, index, array)
// // // // // // // // // // // // // // // })


// // // // // // // // // // // // // // // //HTML COLLECTION
// // // // // // // // // // // // // // // const titulos = document.getElementsByClassName('titulo');
// // // // // // // // // // // // // // // const tituloArray = Array.from(titulos);

// // // // // // // // // // // // // // // tituloArray.forEach(function(item, index){
// // // // // // // // // // // // // // //      console.log(item, index)
// // // // // // // // // // // // // // // })


// // // // // // // // // // // // // // // //Arrow Function 
// // // // // // // // // // // // // // // console.log('Arrow Function '.repeat(3))

// // // // // // // // // // // // // // // const imgs2 = document.querySelectorAll('img');
// // // // // // // // // // // // // // // imgs2.forEach((item) => { // com arrow function
// // // // // // // // // // // // // // //      console.log(item)
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // imgs2.forEach((item) =>  console.log(item)); // com arrow function quando se tem apenas 1 linha de codigo

// // // // // // // // // // // // // // // // imgs2.forEach(function(item){ // sem arrow function 
// // // // // // // // // // // // // // // //      console.log(item)
// // // // // // // // // // // // // // // // })


// // // // // // // // // // // // // // // // Mostre no console cada paragrafo do site 
// // // // // // // // // // // // // // // const paragrafo = document.querySelectorAll('p');
// // // // // // // // // // // // // // // paragrafo.forEach((item) => console.log(item));

// // // // // // // // // // // // // // // //mostre o texto dos paragrafos no console
// // // // // // // // // // // // // // // paragrafo.forEach((item) => console.log(item.innerText))

// // // // // // // // // // // // // // // //Como corrirgir os erros abaixo:
// // // // // // // // // // // // // // // // const imgs3 = document.querySelectorAll('img');
// // // // // // // // // // // // // // // // imgs3.forEach(item, index => {
// // // // // // // // // // // // // // // //      console.log(item, index);
// // // // // // // // // // // // // // // // })
// // // // // // // // // // // // // // // const imgs3 = document.querySelectorAll('img');
// // // // // // // // // // // // // // // imgs3.forEach((item, index) => {
// // // // // // // // // // // // // // //      console.log(item, index)
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // let i = 0;
// // // // // // // // // // // // // // // // imgs3.forEach(=>{
// // // // // // // // // // // // // // // //      console.log(i++);
// // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // let i = 0;
// // // // // // // // // // // // // // // imgs3.forEach(()=>{
// // // // // // // // // // // // // // //      console.log(i++);
// // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // let e = 0;
// // // // // // // // // // // // // // // imgs3.forEach(() => e++);

// // // // // // // // // // // // // // const menu = document.querySelector('.menu')

// // // // // // // // // // // // // // menu.classList.add('ativo', 'teste')
// // // // // // // // // // // // // // menu.classList.add('ativo')
// // // // // // // // // // // // // // menu.classList.remove('teste')

// // // // // // // // // // // // // // menu.classList.contains('ativo') ? console.log('true') : console.log('false')

// // // // // // // // // // // // // // console.log(menu.classList);


// // // // // // // // // // // // // // const animais = document.querySelector('.animais');

// // // // // // // // // // // // // // console.log(animais.attributes)


// // // // // // // // // // // // // // // GetAttribute e setAttribute

// // // // // // // // // // // // // // const img = document.querySelector('img');
// // // // // // // // // // // // // // console.log(img.getAttribute('alt'));

// // // // // // // // // // // // // // img.setAttribute('alt', 'É uma raposa')
// // // // // // // // // // // // // // console.log(img);

// // // // // // // // // // // // // // const possuitAlt = img.hasAttribute('alt') // Retorna um boolean 
// // // // // // // // // // // // // // console.log(possuitAlt)



// // // // // // // // // // // // // // //Adicione a class ativo a todos os itens do menu

// // // // // // // // // // // // // const itensMenu = document.querySelectorAll('.menu a');

// // // // // // // // // // // // // itensMenu.forEach((item ) => {
// // // // // // // // // // // // //      item.classList.add('ativo')
// // // // // // // // // // // // // });

// // // // // // // // // // // // // console.log(itensMenu)

// // // // // // // // // // // // // // Remove a classe ativo de todos os itens do menu e mantenha apenas o primeiro
// // // // // // // // // // // // // itensMenu.forEach((item, index ) => {
// // // // // // // // // // // // //      item.classList.remove('ativo')
// // // // // // // // // // // // // });

// // // // // // // // // // // // // itensMenu[0].classList.add('ativo')

// // // // // // // // // // // // // //Verifique se as imagens possuem o atributo possuitAlt

// // // // // // // // // // // // // const imgs = document.querySelectorAll('img')

// // // // // // // // // // // // // imgs.forEach((item) =>{
// // // // // // // // // // // // //      const possuiAtributo = item.hasAttribute('alt');
// // // // // // // // // // // // //      console.log(item, possuiAtributo)
// // // // // // // // // // // // // })

// // // // // // // // // // // // // //modifique o href interno do link externo no itensMenu
// // // // // // // // // // // // // const link = document.querySelector('a[href^="http"]');
// // // // // // // // // // // // // console.log(link)
// // // // // // // // // // // // // link.setAttribute('href', 'https://www.facebok.com.br');


// // // // // // // // // // // //Height e width

// // // // // // // // // // //      //pegar largura e altura 
// // // // // // // // // // // const listaAnimais = document.querySelector('.animais-lista');
// // // // // // // // // // // const height = listaAnimais.scrollHeight;
// // // // // // // // // // // console.log(height);

// // // // // // // // // // //      //Distancia do top
// // // // // // // // // // // const animaisTop = listaAnimais.offsetTop;
// // // // // // // // // // // console.log(animaisTop);

// // // // // // // // // // //      // Distancia referente a distancia da esquerda
// // // // // // // // // // // const primeiroH2 = document.querySelector('h2');
// // // // // // // // // // // const h2left = primeiroH2.offsetLeft
// // // // // // // // // // // console.log(h2left)

// // // // // // // // // // //      //getBounding
// // // // // // // // // // // const rect = primeiroH2.getBoundingClientRect();
// // // // // // // // // // // console.log(rect.top)
// // // // // // // // // // // if(rect.top < 0) console.log('Passou do elemento')


// // // // // // // // // // // // Window

// // // // // // // // // // // console.log(
// // // // // // // // // // //      window.innerWidth,
// // // // // // // // // // //      window.innerHeight,
// // // // // // // // // // //      window.outerHeight, // Geralmente não se usa pois pega toda a tela ate painel superior 
// // // // // // // // // // //      window.outerWidth, // Geralmente não se usa

// // // // // // // // // // //      window.pageYOffset, //Distancia total do scroll horizontal
// // // // // // // // // // //      window.pageXOffset, //Distancia total do scroll vertical

// // // // // // // // // // // Exercicios

// // // // // // // // // // //Verifique a distancia da primeira imagem em relacao ao topo da página
// // // // // // // // // // const img6 = document.querySelector('img');
// // // // // // // // // // const img6Top = img6.getBoundingClientRect();
// // // // // // // // // // console.log(img6Top.top);

// // // // // // // // // // // Retorno a soma da largura de todas as imagens


// // // // // // // // // // window.onload = function(){
// // // // // // // // // //      const imgLargura = document.querySelectorAll('img');
// // // // // // // // // //           let larguraTotal = 0
// // // // // // // // // //           imgLargura.forEach((item) => {
// // // // // // // // // //                larguraTotal += item.offsetWidth
// // // // // // // // // //      });
// // // // // // // // // //      console.log(larguraTotal)
// // // // // // // // // // }

// // // // // // // // // // //Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com dedo.(40px/48px de acordo com o google)


// // // // // // // // // // const link = document.querySelectorAll('a')
// // // // // // // // // // link.forEach((item ) => {
// // // // // // // // // //      const linkwidth = item.offsetWidth
// // // // // // // // // //      const linkheight = item.offsetHeight

// // // // // // // // // //      if(linkwidth < 48 || linkheight < 48) console.log (
// // // // // // // // // //           `${item} possui ${linkheight} Height e ${linkwidth} Width`
// // // // // // // // // //      )
// // // // // // // // // //      else console.log('Tudo certo')

// // // // // // // // // // })


// // // // // // // // // // // Se o browser for menor que 720px, adicione a classe meni-mobile ao menu 

// // // // // // // // // const browser = window.innerWidth;

// // // // // // // // // if(browser < 720) {
// // // // // // // // //      const menu = document.querySelector('.menu')
// // // // // // // // //      menu.classList.add('menu-mobile')
// // // // // // // // // }

// // // // // // // // // console.log(browser)

// // // // // // // // //Elemento addEventListener

// // // // // // // // // const img7 = document.querySelector('img')
// // // // // // // // // function clicou(){
// // // // // // // // //      console.log('clicou')
// // // // // // // // // }
// // // // // // // // // img7.addEventListener( 'click', clicou)

// // // // // // // // const animaisLista = document.querySelector('.animais-lista');

// // // // // // // // function callBackLista(e){
// // // // // // // //      console.log(e.currentTarget) // Retorna toda a lista
// // // // // // // //      console.log(e.this) // Retorna toda a lista
// // // // // // // //      console.log(e.target) // Retorna o obj que foi clicado
// // // // // // // //      console.log(e.type) // Tipo do evento, neste caso 'click
// // // // // // // //      console.log(e.path)
// // // // // // // // }
// // // // // // // // animaisLista.addEventListener('click', callBackLista);


// // // // // // // //      //preventDefault
// // // // // // // // const linkExterno = document.querySelector('a[href^="http"]')
// // // // // // // // function handleLinkExterno(e){
// // // // // // // //      e.preventDefault(); // Impede que o link externo funcione
// // // // // // // //      console.log(e)
// // // // // // // // }
// // // // // // // // linkExterno.addEventListener('click', handleLinkExterno)

// // // // // // // function handleClitT(e){
// // // // // // //      if(e.key === 't' || e.key === 'T') console.log('clicou')
// // // // // // // }

// // // // // // // window.addEventListener('keydown', handleClitT);

// // // // // //      // Traversing e manipulacao

// // // // // // // const t = document.querySelector('h1')
// // // // // // // console.log(t.innerHTML)
// // // // // // // t.innerText = 'Hello Estou aqui para nossa alegria '

// // // // // // //MANIPULAR ELEMENTOS  / MOVER ELEMENTOS

// // // // // // const lista = document.querySelector('.animais-lista')
// // // // // // const contato = document.querySelector('.contato')
// // // // // // const titulo = contato.querySelector('.titulo')
// // // // // // const animais = document.querySelector('.animais')
// // // // // // const mapa = document.querySelector('.mapa')

// // // // // // // console.log(lista.children[--lista.children.length])
// // // // // // // console.log(lista.querySelector('li:last-child'))


// // // // // // // lista.appendChild(titulo) // Vai colocar titulo no ultimo item da lista, adiciona esse item a lista na ultima posicao.

// // // // // // // contato.insertBefore(animais, titulo)     //insere a lista antes... 
// // // // // // // contato.removeChild(titulo) //remove titulo de contato
// // // // // // // contato.replaceChild(mapa, titulo)     //substitui titulo por mapa

// // // // // // const novoh1 = document.createElement('h1')
// // // // // // novoh1.innerText = 'Novo Titulo'
// // // // // // novoh1.classList.add('titulo')
// // // // // // mapa.appendChild(novoh1) // Vai adicionar novo h1 apos o mapa

// // // // // // //clonar elemento

// // // // // const h1 = document.querySelector('h1')
// // // // // const faq = document.querySelector('.faq')

// // // // // const cloneh1 = h1.cloneNode(true);

// // // // // faq.appendChild(cloneh1)


// // // // // Exercicios

// // // // // dupliqye o menu e adicione ele em copy

// // // // const menu = document.querySelector('.menu')
// // // // const copy = document.querySelector('.copy')

// // // // const cloneMenu = menu.cloneNode(true)
// // // // copy.appendChild(cloneMenu)

// // // // //selecione o primeiro DT do dl de faq
// // // // const faq = document.querySelector('.faq')
// // // // const primeiroDT = faq.querySelector('dt')

// // // // // selecione o DD referente ao primeiro DT
// // // // const proximoDD = primeiroDT.nextElementSibling;

// // // // // substitua o conteúdo html de .faq pelo de .animais
// // // // const animais = document.querySelector('.animais')

// // // //  faq.innerHTML = animais.innerHTML


// // // // Navegacao por TAB

// // // function initTabNav() {

// // //      const tabMenu = document.querySelectorAll('.js-tabmenu li');
// // //      const tabContent = document.querySelectorAll('.js-tabcontent section');
     
// // //      if(tabMenu.length && tabContent.length){
// // //           tabContent[0].classList.add('ativo')
// // //           //Adiciona class ativo na lista de descricao de cada animal
// // //           function activeTAb(index){
// // //                tabContent.forEach((section) => {
// // //                     section.classList.remove('ativo');
// // //                })
// // //                tabContent[index].classList.add('ativo');
// // //           }
     
// // //           // adiciona a class ativo na lista de descricao baseado na imagem q é clicada
// // //           tabMenu.forEach((itemMenu, index) =>{
// // //                itemMenu.addEventListener('click', () => {
// // //                     activeTAb(index);
// // //                })
// // //           })
// // //      }
// // // }

// // // initTabNav();

// // // // Accordion list :   Uma pergunta com resposta escondida e quando click mostra a resposta
// // // function initAccordion(){
// // //      const accordionList = document.querySelectorAll('.js-accordion dt');
// // //      const activeClass = 'activeClass'
// // //      if(accordionList.length ){
// // //           accordionList[0].classList.add(activeClass);
// // //      accordionList[0].nextElementSibling.classList.add(activeClass)

// // //      function activeAccordion(){
// // //           this.classList.toggle(activeClass)
// // //           this.nextElementSibling.classList.toggle(activeClass)
// // //      }

// // //      accordionList.forEach((item) => {
// // //           item.addEventListener('click', activeAccordion)
// // //      })
// // //      }
// // // }

// // // initAccordion();


// // //Scroll Suave Link interno

// // const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

// // function scrollToSection(e){
// //      e.preventDefault(); // Cancelar o evento do click
// //      const href = e.currentTarget.getAttribute('href');
// //      const section = document.querySelector(href)
// //      /* Forma Alternativa 
     
// //      const top = section.offsetTop;
// //      window.scrollTo({
// //           top: top,
// //           behavior: 'smooth',
// //      })
// //      */

// //      section.scrollIntoView({
// //           behavior: 'smooth',
// //           block: 'start',
// //      });

// // }

// // linksInternos.forEach((link) => {
// //      link.addEventListener('click', scrollToSection)
// // })

// //Animação ao scroll


// const sections = document.querySelectorAll('.js-scroll');
// const windowsMetade = window.innerHeight + 0.6

// function animaScroll (){
//      sections.forEach((s) => {
//           const sectionTop = s.getBoundingClientRect().top  - windowsMetade;
//           const isSectionVisible = (sectionTop - windowsMetade) < 0;
//           if(isSectionVisible){
//                s.classList.add('ativo')
//           }
//      })
// }

// window.addEventListener('scroll', animaScroll)