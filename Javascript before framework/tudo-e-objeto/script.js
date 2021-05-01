// OBJECTO

// const menu = {
//      class: ".principal",
//      ativar(){
//           const menuElement = document.querySelector(this.class) // querySelector é objeto
//           console.log(menuElement); // console é objeto
//      }
// }
// menu.ativar()

function upperName(name){
     return name.toUpperCase();
}
console.log(upperName("adilson"))

const uppperCar = name => { // Se tiver so um parametro nao precisa de parentes.
     return upperName(name);
}
console.log(uppperCar('ferrari'))

//Se tiver so um retorno posso omitir function e retorno.
const upperFrut = name => upperName(name);
console.log(uppperCar('banana'))

const countLetters = word => word.length;
console.log(countLetters('Adilson'))

class Menu {
     constructor(menu){
          this.menuElement = document.querySelector(menu);
     }

     addActiveEvent(){
          this.menuElement.addEventListener("click", function(event){
               event.target.classList.add("active");
          });
     }
}

const menu= new Menu(".principal");
menu.addActiveEvent()
console.log(menu)

// Arrow function nao cria um novo this. 

function handleMouseMove(event){
     // const clientX = event.clientX;
     // const clientY = event.clientY;
     // console.log(clientX, clientY)

     const {clientX, clientY} = event;
     console.log(clientX, clientY)

}

document.documentElement.addEventListener("mousemove", handleMouseMove)