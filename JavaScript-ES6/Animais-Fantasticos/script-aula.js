//  const animals = document.getElementById('Animals')
//  const grid = document.getElementsByClassName('grid-section')
//  const contacto = document.querySelector('.contacto') // Return the first element of Selector

//  const firstLi = document.querySelector('li');
//  const internalLink = document.querySelector('[href^="#"]');
//  const img = document.querySelectorAll('img');


//  const gridSelectionHTML = document.getElementsByClassName('grid-section');
//  const gridSelectionNode = document.querySelectorAll('.grid-section');

//  console.log(gridSelectionHTML) // Foreach not Accepted
//  console.log(gridSelectionNode) // Foreach Accepted

//  gridSelectionNode.forEach(function(item, index){
//       console.log(index, item)
//  })

//  const arrayGrid = Array.from(gridSelectionHTML); // Creat a array to use foreach in gridSelectionHTML.
//  console.log(arrayGrid)
//  console.log('+++'.repeat(20))
//  console.log('+++'.repeat(20))
//  console.log('+++'.repeat(20))

//  // Exercises
//  const imgsite = document.querySelectorAll('img');
//  console.log(imgsite);
//  console.log('+++'.repeat(20))

//  const animalsImg = document.querySelectorAll('img[src^="IMG/imagem"]')
//  console.log(animalsImg)
//  console.log('+++'.repeat(20))

//  const link = document.querySelectorAll('[href^="#"]');
//  console.log(link)
//  console.log('+++'.repeat(20))

//  const h2Animals =  document.querySelector('.Animals-description h2');
//  console.log(h2Animals)
//  console.log('---'.repeat(20))
//  const Animals2 =  document.querySelector('.Animals-description');
//  const h2Animals2 =  Animals2.querySelector('h2')
//  console.log(Animals2)
//  console.log(h2Animals2)

//  //selecione o ultimo p do site 
//  const paragraphs = document.querySelectorAll('p');
//  console.log(paragraphs[paragraphs.length -1])


//  //NodeList
//  const imgs = document.querySelectorAll('img');

//  imgs.forEach(function(item, index, array){
//       console.log(item, index, array)

//  })


//  //HTML COLLECTION
//  const titles = document.getElementsByClassName('title');
//  const titleArray = Array.from(titles);

//  titleArray.forEach(function(item, index){
//       console.log(item, index)
//  })


//  //Arrow Function 
//  console.log('Arrow Function '.repeat(3))

//  const imgs2 = document.querySelectorAll('img');
//  imgs2.forEach((item) => { // just work with array
//       console.log(item)
//  });

//  imgs2.forEach((item) =>  console.log(item)); // User Arrow function when just have one code line

//  // imgs2.forEach(function(item){ // without arrow function 
//  //      console.log(item)
//  // })


//  // Show on the website each paragraphs 
//  const paragraphs = document.querySelectorAll('p');
//  paragraphs.forEach((item) => console.log(item));

//  //Show the text in each paragraphs
//  paragraphs.forEach((item) => console.log(item.innerText))

//  //How to fix the errors below:
//  // const imgs3 = document.querySelectorAll('img');
//  // imgs3.forEach(item, index => {
//  //      console.log(item, index);
//  // })
//  const imgs3 = document.querySelectorAll('img');
//  imgs3.forEach((item, index) => {
//       console.log(item, index)
//  });

//  // let i = 0;
//  // imgs3.forEach(=>{
//  //      console.log(i++);
//  // })

//  let i = 0;
//  imgs3.forEach(()=>{
//       console.log(i++);
//  })

//  let e = 0;
//  imgs3.forEach(() => e++);

//  const menu = document.querySelector('.menu')

//  menu.classList.add('active', 'test')
//  menu.classList.add('active')
//  menu.classList.remove('test')

//  menu.classList.contains('active') ? console.log('true') : console.log('false')

//  console.log(menu.classList);


//  const Animals = document.querySelector('.Animals');

//  console.log(Animals.attributes)


// GetAttribute e setAttribute

//  const img = document.querySelector('img');
//  console.log(img.getAttribute('alt'));

//  img.setAttribute('alt', 'This Animal is a fox')
//  console.log(img);

//  const ownAlt = img.hasAttribute('alt') // Return boolean 
//  console.log(ownAlt)



 //Adicione a class active a todos os itens do menu

//  const menuItens = document.querySelectorAll('.menu a');

//  menuItens.forEach((item ) => {
//       item.classList.add('active')
//  });

//  console.log(menuItens)

//  // Remove all active class from menu itens and just leave the first element
//  menuItens.forEach((item, index ) => {
//       item.classList.remove('active')
//  });

//  menuItens[0].classList.add('active')

//  // Check if the images has alt attribute
 
//  const imgs = document.querySelectorAll('img')

//  imgs.forEach((item) =>{
//       const hasAttribute = item.hasAttribute('alt');
//     console.log(item, 'hasAttribute')
//  })

// modify the href link external 
// const link = document.querySelector('a[href^="http"]');
// console.log(link)
// link.setAttribute('href', 'https://www.facebok.com');


// //Height e width

      //Get width and height
//  const listAnimals = document.querySelector('.Animals-list');
//  const height = listAnimals.scrollHeight;
//  console.log(height);

//       //Top distance
//  const AnimalsTop = listAnimals.offsetTop;
//  console.log(AnimalsTop);

//       // Distancia referente a distancia da esquerda
//  const firstH2 = document.querySelector('h2');
//  const h2left = firstH2.offsetLeft()
//  console.log(h2left)

//       //getBounding
//  const rect = firstH2.getBoundingClientRect();
//  console.log(rect.top)
//  if(rect.top < 0) console.log('Passed the element ')


 // Window

//  console.log(
//       window.innerWidth,
//       window.innerHeight,
//       window.outerHeight, // Not used Usually because get the all screen.
//       window.outerWidth, // Not used Usually

//       window.pageYOffset, //Distance of all horizontal scroll
//       window.pageXOffset, //Distance of all vertical scroll
//  )

 // exercises

 //Check the distance of first image 
 //Check the distance of the first image in relation to the top of the page
//  const img6 = document.querySelector('img');
//  const img6Top = img6.getBoundingClientRect();
//  console.log(img6Top.top);

//  // Return the amount of the width of all images
//  window.onload = function(){
//       const imgWidth = document.querySelectorAll('img');
//            let totalHeight = 0
//            imgWidth.forEach((item) => {
//                totalHeight += item.offsetWidth
//       });
//       console.log(totalHeight)
//  }

 //Check that the links on the page have the minimum recommended for screens used with finger. (40px / 48px according to google)


//  const link = document.querySelectorAll('a')
//  link.forEach((item ) => {
//       const linkwidth = item.offsetWidth
//       const linkheight = item.offsetHeight

//       if(linkwidth < 48 || linkheight < 48) console.log (
//            `${item} has ${linkheight} Height and ${linkwidth} Width`
//       )
//       else console.log('alright')

//  })


 // If the browser is less than 720px, add the meni-mobile class to the menu

// const browser = window.innerWidth;

// if(browser < 720) {
//      const menu = document.querySelector('.menu')
//      menu.classList.add('mobile-menu')
// }

// console.log(browser)

// ///Element addEventListener

// // const img7 = document.querySelector('img')
// // function clicked(){
// //      console.log('clicked')
// // }
// // img7.addEventListener( 'click', clicked)

//  const Animalslist = document.querySelector('.Animals-list');

//  function callBacklist(e){
//       console.log(e.currentTarget) // Returns all list 
//       console.log(e.this) // Returns all list
//       console.log(e.target) // return the object that was clicked
//       console.log(e.type) // event type
//       console.log(e.path)
//  }
//  Animalslist.addEventListener('click', callBacklist);


//       //preventDefault
//  const externalLink = document.querySelector('a[href^="http"]')
//  function handleexternalLink(e){
//       e.preventDefault(); // Prevent that external link work
//       console.log(e)
//  }
//  externalLink.addEventListener('click', handleexternalLink)

//  function handleClitT(e){
//       if(e.key === 't' || e.key === 'T') console.log('clicked') // Press the T key in keyboard
//  }

//  window.addEventListener('keydown', handleClitT);

//       // Traversing and manipulation

//  const t = document.querySelector('h1')
//  console.log(t.innerHTML)
//  t.innerText = "Hello! I`m here for our joy "

// // HANDLE(manipulation) ELEMENTS / MOVE ELEMENTS

//  const list = document.querySelector('.Animals-list')
//  const contacto = document.querySelector('.contacto')
//  const title = contacto.querySelector('.title')
//  const Animals = document.querySelector('.Animals')
//  const map = document.querySelector('.map')

//  console.log(list.children[--list.children.length])
//  console.log(list.querySelector('li:last-child'))


//  list.appendChild(title) // It will put title on the last item in the list. add that item to the list in the last position.
//  contacto.insertBefore(Animals, title)     //insert a list before... 
//  contacto.removeChild(title) //remove title of contacto
//  contacto.replaceChild(map, title)     //replace title per map

//  const novoh1 = document.createElement('h1')
//  novoh1.innerText = 'New title'
//  novoh1.classList.add('title')
//  map.appendChild(novoh1) // It will insert a new h1 after the map

// clonar element

//  const h1 = document.querySelector('h1')
//  const faq = document.querySelector('.faq')

//  const cloneh1 = h1.cloneNode(true);

//  faq.appendChild(cloneh1)


// exercises

// duplique the menu and insert the clone in element copy

// const menu = document.querySelector('.menu')
// const copy = document.querySelector('.copy')

// const cloneMenu = menu.cloneNode(true)
// copy.appendChild(cloneMenu)

// Select the first DT of dl from faq
// const faq = document.querySelector('.faq')
// const firstDT = faq.querySelector('dt')

// Select the DD relative to the first DT
// const nextDD = firstDT.nextElementSibling;

// replace the html content of .faq with of .Animals
// const Animals = document.querySelector('.Animals')

//  faq.innerHTML = Animals.innerHTML


// // Tab Navigation

//  function initTabNav() {

//       const tabMenu = document.querySelectorAll('.js-tabmenu li');
//       const tabContent = document.querySelectorAll('.js-tabcontent section');
     
//       if(tabMenu.length && tabContent.length){
//            tabContent[0].classList.add('active')
//            //insert active class  at list of description of the each animal
//            function activeTAb(index){
//                 tabContent.forEach((section) => {
//                      section.classList.remove('active');
//                 })
//                 tabContent[index].classList.add('active');
//            }
     
//            // insert the active class at list of description based at image that has clicked
//            tabMenu.forEach((itemMenu, index) =>{
//                 itemMenu.addEventListener('click', () => {
//                      activeTAb(index);
//                 })
//            })
//       }
//  }

//  initTabNav();

// // Accordion list :   A question with hidden answer and when click shows the answer
//  function initAccordion(){
//       const accordionList = document.querySelectorAll('.js-accordion dt');
//       const activeClass = 'activeClass'
//       if(accordionList.length ){
//            accordionList[0].classList.add(activeClass);
//       accordionList[0].nextElementSibling.classList.add(activeClass)

//       function activeAccordion(){
//            this.classList.toggle(activeClass)
//            this.nextElementSibling.classList.toggle(activeClass)
//       }

//       accordionList.forEach((item) => {
//            item.addEventListener('click', activeAccordion)
//       })
//       }
//  }

//  initAccordion();


// Scroll Suave Link interno

// // const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

// // function scrollToSection(e){
// //      e.preventDefault(); // cancel the click event
// //      const href = e.currentTarget.getAttribute('href');
// //      const section = document.querySelector(href)
// //      /* Alternative Form
     
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

// // internalLinks.forEach((link) => {
// //      link.addEventListener('click', scrollToSection)
// // })

// //Scrool Animation


// const sections = document.querySelectorAll('.js-scroll');
// const windowsMetade = window.innerHeight + 0.6

// function animaScroll (){
//      sections.forEach((s) => {
//           const sectionTop = s.getBoundingClientRect().top  - windowsMetade;
//           const isSectionVisible = (sectionTop - windowsMetade) < 0;
//           if(isSectionVisible){
//                s.classList.add('active')
//           }
//      })
// }

