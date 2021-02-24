//  function Car(brandSet, price){
//      const interestRate = 1.2;
//       const finalPrice = interestRate * price;
//      this.brand = brandSet;
//       this.price = finalPrice;
//  }

//  const honda = new Car('Honda', 2000);

//  const mini = new Car();
//  mini.marca = 'Mini';
//  mini.preco = 1200;


// console.log(honda)
// console.log(mini)

//  const Dom = {
//       seletor: 'li',
//       element() {
//            return document.querySelector(this.seletor);

//       },
//       active(){
//            this.element().classList.add('active')
//       }
//  }

// Construction Function

//  function Dom (seletor) {
//       this.element = function() {
//            return document.querySelector(seletor);

//       },
//       this.activate = function(){
//            this.element().classList.add('active')
//       }
//  }


//  const li = new Dom('li');
//  const ul = new Dom('ul');
//  const lastLi = new Dom('li:last-child');
//  lastLi.activate();

// // exercises 

 const People = {
      name: 'Person Name',
      Age: 0,
      walking(){
           console.log(this.name + ' is Walking')
      }
 }
function People(name, age) {
     this.name = name;
     this.age = age;
     this.walk = function(){
          console.log(this.name + ' is Walking')
     }
}

const joao = new People('João', 23);
console.log(joao)
joao.walk();

const maria = new People('Maria', 25)
console.log(maria)
maria.walk();

const bruno = new People('Bruno', 15)
console.log(bruno)
bruno.walk();


function Dom(seletor){
     const elementList = document.querySelectorAll(seletor);
     this.elementee = elementList;
     this.addClass = function(classe){
          elementList.forEach((element) => {
               element.classList.add(classe)
          })
     }

     this.removeClass = function(classe){
          elementList.forEach((element) => {
               element.classList.remove(classe);
          })
     }
}

const listItem = new Dom('li');


PROTOTYPE

function People(name, age) {
     this.name = name;
     this.age = age;
}
const bruno = new People('bruno', 29);

console.log(bruno.prototype) // return  Underfined because  this`s a object
console.log(People.prototype) // Return because this`s a function