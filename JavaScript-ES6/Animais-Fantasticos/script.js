// Navegacao por TAB
function initTabNav() {

     const tabMenu = document.querySelectorAll('.js-tabmenu li');
     const tabContent = document.querySelectorAll('.js-tabcontent section');
     
     if(tabMenu.length && tabContent.length){
          tabContent[0].classList.add('ativo')
          //Adiciona class ativo na lista de descricao de cada animal
          function activeTAb(index){
               tabContent.forEach((section) => {
                    section.classList.remove('ativo');
               })
               tabContent[index].classList.add('ativo');
          }
     
          // adiciona a class ativo na lista de descricao baseado na imagem q é clicada
          tabMenu.forEach((itemMenu, index) =>{
               itemMenu.addEventListener('click', () => {
                    activeTAb(index);
               })
          })
     }
}

// Accordion list
function initAccordion(){
     const accordionList = document.querySelectorAll('.js-accordion dt');
     const activeClass = 'ativo'
     if(accordionList.length ){
          accordionList[0].classList.add(activeClass);
          accordionList[0].nextElementSibling.classList.add(activeClass)

          function activeAccordion(){
               this.classList.toggle(activeClass)
               this.nextElementSibling.classList.toggle(activeClass)
          }

          accordionList.forEach((item) => {
               item.addEventListener('click', activeAccordion)
          })
     }
}

// ScrollSuave
function scrollSuave(){

     const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
     function scrollToSection(e){
          e.preventDefault(); // Cancelar o evento do click
          const href = e.currentTarget.getAttribute('href');
          const section = document.querySelector(href)
          section.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
          });
}

linksInternos.forEach((link) => {
     link.addEventListener('click', scrollToSection)
})
}


scrollSuave();
initTabNav();
initAccordion();