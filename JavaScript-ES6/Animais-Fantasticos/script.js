// Tab Navigation
function initTabNav() {

     const tabMenu = document.querySelectorAll('.js-tabmenu li');
     const tabContent = document.querySelectorAll('.js-tabcontent section');
     
     if(tabMenu.length && tabContent.length){
          tabContent[0].classList.add('active')
          //insert the active class at description list of each animal
          function activeTAb(index){
               tabContent.forEach((section) => {
                    section.classList.remove('active');
               })
               tabContent[index].classList.add('active');
          }
     
          // insert the active class at description list based at image that has clicked
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
     const activeClass = 'active'
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

// ScrollSoft
function scrollSoft(){

     const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
     function scrollToSection(e){
          e.preventDefault(); // cancel click event
          const href = e.currentTarget.getAttribute('href');
          const section = document.querySelector(href)
          section.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
          });
}

internalLinks.forEach((link) => {
     link.addEventListener('click', scrollToSection)
})
}


scrollSoft();
initTabNav();
initAccordion();
