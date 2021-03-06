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

//  const People = {
//       name: 'Person Name',
//       Age: 0,
//       walking(){
//            console.log(this.name + ' is Walking')
//       }
//  }
// function People(name, age) {
//      this.name = name;
//      this.age = age;
//      this.walk = function(){
//           console.log(this.name + ' is Walking')
//      }
// }

// const joao = new People('João', 23);
// console.log(joao)
// joao.walk();

// const maria = new People('Maria', 25)
// console.log(maria)
// maria.walk();

// const bruno = new People('Bruno', 15)
// console.log(bruno)
// bruno.walk();


// function Dom(seletor){
//      const elementList = document.querySelectorAll(seletor);
//      this.elementee = elementList;
//      this.addClass = function(classe){
//           elementList.forEach((element) => {
//                element.classList.add(classe)
//           })
//      }

//      this.removeClass = function(classe){
//           elementList.forEach((element) => {
//                element.classList.remove(classe);
//           })
//      }
// }

// const listItem = new Dom('li');


// PROTOTYPE

// function People(name, age) {
//      this.name = name;
//      this.age = age;
// }

// People.prototype.walk = function(){
//      return 'Walking'
// }

// const bruno = new People('bruno', 29);

// console.log(bruno.prototype) // return  Underfined because  it`s a object
// console.log(People.prototype) // Return because it`s a function

// const country = 'Brasil'
// const city = new String('Rio')

// const listAnimal = ['dog', 'horse', 'cat', 'cow']
// const list = document.querySelectorAll('li')

// const newList = Array.from(list)


// const car = {
//      brand: 'ford',
//      year: 2010,
//      price: 1200,
//      // Running its a function but not return a function, return a boolean.
//      running() {
//           return true;
//      }
// }


/* Creat a function people  he must name, nickname and age. Creat a method on prototype that return full name of people*/ 

// function People(name, nickname, age){
//      this.name = name;
//      this.nickname = nickname;
//      this.age = age;
// }

// People.prototype.fullName = function(){
//      return `${this.name} ${this.nickname}`
// }

// const adilson = new People('Adilson', 'Jäger', 27)

/* STRING  */

// let food = 'Pizza'
// let phrase = 'The best pizza of world'
// let foodList = `banana, apple, orange, melon, Pizza`
// const listPrice = ['$ 99', '$120.33', '$1320.99', '$550.99']

// console.log(food.length) // 5
// console.log(phrase.charAt(2)) //e 
// console.log(foodList.includes(food)) // true
// console.log(foodList.includes('melon')) // true
// console.log(foodList.startsWith('bana')) // true 
// console.log(foodList.endsWith('za')) // true
// console.log(phrase.slice(0, 6)) // the be
// console.log(phrase.slice(0, 2)) // th
// console.log(phrase.slice(-3)) // rld
// console.log(phrase.slice(12))  // za of world
// console.log(food.indexOf('a')) //4
// console.log(food.indexOf('z')) //2
// console.log(food.lastIndexOf('z')) //3
// console.log(listPrice[0].padStart(20,'*')) //******$ 99  > Complet the blank spacing to 20 characters
// console.log(listPrice[1].padStart(12,'&')) //&&&&&$120.33 > Complet the blank spacing to 12 characters
// console.log(phrase.replace(/[ ]+/g, ', ')) //The, best, pizza, of, world // With regular expression return all itens 
// console.log(food.replace('z', 't')) //Pitza  > Without regular expression just return the fist objet
// console.log(food.replace('Pizza', 'cake')) //cake
// console.log(phrase.split(' ')) //[ 'The', 'best', 'pizza', 'of', 'world' ] 


// const html = '<div>The best cake</div><div>Hot chocolat on the winter</div>'
// const htmlArray = html.split('div')
// const newHtml = htmlArray.join('section')
// console.log('Html Array = '+htmlArray) // Html Array = <,>The best cake</,><,>Hot chocolat on the winter</,>
// console.log('New Hatml = ' +newHtml) // New Hatml = <section>The best cake</section><section>Hot chocolat on the winter</section>

// let foodArray = ['banana', 'apple', 'orange', 'melon', 'Pizza']
// const newArray = foodArray.join('22')
// console.log(newArray) //banana22apple22orange22melon22Pizza

// const car1 = 'Ferrari'
// const car2 = 'ferrari'
// const car3 = 'FERRARI'
// let name = " Adilson magalhaes Jäger  "

// console.log(car1 ==='ferrari') // false
// console.log(car1.toLocaleLowerCase() ==='ferrari') // true
// console.log(car1.toUpperCase() ==='FERRARI') // true
// console.log(name.trim()) // Remove spacing of start and end 
// console.log(name.trimStart()) // Remove spacing from start
// console.log(name.trimEnd()) // Remove spacing from end 


// NUMBER E MATH

// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isInteger(2)) // true
// console.log(Number.isInteger(2.34)) // false

// //parseFloat turns into string in a float number
// console.log(Number.parseFloat('343.50')) //343.50  
// console.log(Number.parseFloat('100 Euros ')) //100
// console.log(Number.parseFloat('343,50')) //343  does not accept commas (,)

// const price = 1.99
// const price2 = 199.999
// console.log(price.toFixed()) // 2 
// console.log(price2.toFixed(4)) // 199.9990
// console.log(price2.toFixed(2)) // 200.00
// console.log(price2.toFixed(1)) // 200.0

// let real = 48.32
// real = real.toLocaleString('pt-BR', {
//      style: 'currency',
//      currency: 'BRL'});

// console.log(real)

// console.log(Math.ceil(4.99)) // 5
// console.log(Math.ceil(4.1)) // 5
// console.log(Math.floor(6.1)) // 6
// console.log(Math.floor(6.99)) // 6
// console.log(Math.round(9.6)) // 10
// console.log(Math.round(6.4)) // 6
// console.log(Math.round(6.5)) // 6

// console.log(Math.max(2, 3, 4, 10, 8, 5, 12)) // 12
// console.log(Math.min(2, 3, 4, 10, 8, 5, 12)) // 2

// Math.random() 0 to 1
// console.log(Math.floor( Math.random() * 100)) // 0 to 100 and floor to down
// console.log(Math.floor( Math.random() * 500)) // 0 to 500 and floor to down
// console.log(Math.floor( Math.random() * (72 - 32 + 1)) + 32); // Number random between 72 and 32

// function numberRandom (max, min) { return Math.floor( Math.random() * ( max - min + 1)) + min }
// console.log(numberRandom(200, 1))

// const n = '3, 6, 5, 4, 8'
// const arrayN = n.split(', ')
// console.log(arrayN) //[ '3', '6', '5', '4', '8' ]
// console.log(Math.max(...arrayN)) // 8
// console.log(Math.min(...arrayN)) // 3

// const listPrice = ['R$ 59,99', 'R$ 200,222', 'R$ 230 ', 'r$ 200']
// function ClearPrice(price){
//      price = +price.toUpperCase().replace('R$', '').trim().replace(',', '.') // User the signal + to tranforme string in interger
//      price = +price.toFixed(2);
//      return price;
// }

// let amount = 0
// listPrice.forEach((iten)=>{
//      amount += ClearPrice(iten)
// })

// console.log(amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }))

// ARRAY 

// const music = ['funck', 'sertanejo', 'pagode',];
// const car = new Array('fiat', 'mustang', 'opala')


// console.log(car[1]) // Mustang
// console.log(car[2]) // opala
// console.log(car[10]) // undefined
// console.log(car.length) // 3

// const li = document.querySelectorAll('li'); //Nodelist
// const arrayLi = Array.from(li)

// console.log(li) // nodeList 
// console.log(arrayLi) // Array 

// const obj = {
//      0: 'Adilson',
//      1: 'Luciani',
//      2: 'Rebeca',
//      length: 3
// }

// const objArray = Array.from(obj) // I need put the length in obj.
// console.log(Array.isArray(li))//  false, because it`s not array it`s nodelist

// const music = ['funck', 'sertanejo', 'pagode'];
// console.log(music.sort()) // Ordem A > Z
// const number = [21, 32, 43, 54, 31, 6,12] 
// console.log(number.sort()) //[12, 21, 31, 32, 43, 54, 6] NOT USER WITH NUMBER

// console.log(music.unshift('rock', 'indian')) // 5 > Add element in start array and return the lenthg
// console.log(music.push('rap', 'gospel')) // 5 > Add element in end array and return the lenthg
// console.log(music)

// console.log(music.reverse()) 
// console.log(music.pop())// Remove the last item and return him
// console.log(music.shift()) // Remove the first item and return him

// console.log(music.splice(3, 0, 'eletronic')) // 3 is the position where will add the element and 0 is the amount of item will be remove after the add element. This case will not remove because I set 0.
// console.log(music)

// console.log(music.splice(3, 2, 'forro', 'frevo')) // Will be remove 2 itens (pagode and sertanejo ) and add forro and frevo
// console.log(music)

// console.log(['item1', 'item2', 'item3', 'item4', 'item5', 'item6'].fill('Banana', 3, 4)) //fill the position 3 and 4 with banana. 3 > start, 4 > end

// const music = ['funck', 'sertanejo', 'pagode'];
// const number = [21, 32, 3, 43, 54, 31, 6,12] 
// const concat = music.concat(number);
// console.log(concat)  // [ 'funck', 'sertanejo', 'pagode', 21, 32, 43, 54, 31, 6, 12 ]

// console.log(concat.includes('funck')) // check if in array/list has the element, return true or false 
// console.log(concat.indexOf(6)) // return the position of element in array/list. in this case return 8. obs: return the first element, if has an element in position 2 and other in position 6 will be return just the element in position 2
// console.log(concat.lastIndexOf(3)) // Return the last element. I can user a foreach to return the all elements. 

// console.log(concat.slice(2, 4)) // Return the element of index 2 to index 4


 // FOREACH -- OBS  always return  Underfined because to foreach don`t carry to return just for want I`ll do if the method. 

// const music = ['funck', 'sertanejo', 'pagode'];
// // item return the element (funk), index return the position (0, 1, 2) and array return all with length. 
// music.forEach((item, index, array) => {
//      console.log(item.toUpperCase(), index, array)
// })
// const li = document.querySelectorAll('li')
// li.forEach((item) => item.classList.add('ativo'))

//  // MAP -- With map I can user return to Construction a new Array
//  const music = ['funck', 'sertanejo', 'pagode'];
// music.map((item, index, array)=> {console.log(item, index, array)})
// const newArray = music.map((item, index, array) => {
//      return index
// })
// console.log(newArray) // [0, 1, 2]

// const number = [21, 32, 3, 43, 54, 31, 6,12]
// const number2 = number.map(index => index * 2) // this is a return 
// console.log(number2) // [42, 64, 6, 86, 108, 62, 12, 24]

// const lesson = [
//      {
//           name: 'html-1',
//           min: 12
//      },
//      {
//           name: 'html-2',
//           min: 14
//      },
//      {
//           name: 'html-3',
//           min: 32
//      },
// ]

// (1)
// function amountTime (lesson){
//      return lesson.min }
// const arrayNameLesson = lesson.map(amountTime)
// console.log(arrayNameLesson)
//(2)
//const amountTime = lesson.map(item =>  item.min )
//console.log(amountTime)

// // Reduce
// const number = [101, 12, 32, 10, 21, 1]
// const total1 = number.reduce((keeper, current) => {
//      console.log(`current = ${current}`)
//      return keeper + current

// }, 0)

// console.log(`keeper = ${total1}`)

// const highestValue = number.reduce((before, current) => {
//      return before > current ? before : current
// })
// console.log(highestValue)

// const lesson = [
//           {
//                name: 'html-1',
//                min: 12
//           },
//           {
//                name: 'html-2',
//                min: 14
//           },
//           {
//                name: 'html-3',
//                min: 32
//           },
//      ]
// const listLesson = lesson.reduce((keeper, lesson, index) => {
//      keeper[index] = lesson.name
//      return keeper
// }, 0)


// //Some
// const food = ['ICE CREAM', 'BIGMAC', 'HOPPER', 'BIGTAST']
// const hasHoper = food.some(item => item === 'hopper'.toLocaleUpperCase()) // some return true or false 
// const hasHoper2 = food.some(item => item === 'hopppy') // some return true or false 
// console.log(hasHoper) // true
// console.log(hasHoper2) // false

// // Every
// const number = [101, 12, 32, 10, 21, 2]
// const biggerThen = number.every(x => x > 3);  //every: check if all parameters is true, if just one is false, return false. 
// const biggerThen2 = number.every(x => x > 1);  
// console.log(biggerThen) // false 
// console.log(biggerThen2) //true 

// FIND
// const number = [1, 12, 32, 10, 21, 2]
// const findBiggerNumber = number.find(x => x > 3 ) // find to the first bigger element.
// console.log(findBiggerNumber) // 12

// const findBiggerNumber2 = number.findIndex(x => x > 3 ) // Return the index o element
// console.log(findBiggerNumber2) // 1


// //FILTER
// const fruit = ['banana', undefined, 'apple', null, 'grape', '', 0, 'melon']
// const ArrayFruit = fruit.filter(item =>  item) // Just return the true element, Underfined/null/''/0 are  false
// console.log(ArrayFruit) //["banana", "apple", "grape", "melon"]

// const lesson = [
//                {
//                     name: 'html-1',
//                     min: 12
//                },
//                {
//                     name: 'html-2',
//                     min: 14
//                },
//                {
//                     name: 'html-3',
//                     min: 32
//                },
//           ]

// const bigger15 = lesson.filter((lesson => lesson.min > 13 ))
// console.log(bigger15)  //  {name: "html-2", min: 14}
//                        // {name: "html-3", min: 32


// // look in html and creat a object with map
// const course = document.querySelectorAll('.course')
// const arrayCourse = Array.from(course)

// const objCourse = arrayCourse.map((course) => {
//      const titulo = course.querySelector('h1').innerText;
//      const description = course.querySelector('p').innerText
//      const time = course.querySelector('.hours').innerText
//      return{
//           titulo,
//           description,
//           time,
//      }
// })

// console.log(objCourse)

// //Return numbers bigger that 100
// const number = [22, 33, 100, 02, 102, 322, 344, 87]
// const bigger100 = number.filter(item => item > 100)
// console.log(bigger100)


// const shopping = [
//      {
//           item: 'Banana',
//           price: 'R$ 4,99'
//      },
//      {
//           item: 'Eggs',
//           price: 'R$ 2,99'
//      },
//      {
//           item: 'meat',
//           price: 'R$ 33,22'
//      },
//      {
//           item: 'Soda',
//           price: 'R$ 5,50'
//      },
//      {
//           item: 'Chess',
//           price: 'R$ 12,90'
//      }
// ]

// function ClearPrice(price){
//      const pricee = +price.toUpperCase().replace('R$', '').trim().replace(',', '.')
//      return pricee
// }

// const amount = shopping.reduce((keeper, current) => {
//      const price = ClearPrice(current.price)
//      return keeper + price

// },0)
// console.log(amount)


          // FUNCTION

// Call 
const car = {
     brand: 'ford',
     year: 2010,
}

function descriptionCar ( speed ) {
     console.log(this.brand + ' ' + this.year + ' ' + speed)
}

descriptionCar() // Underfined undefined
descriptionCar.call() // undefined undefined
descriptionCar.call({brand: 'honda', year: 2020}, 120) // honda 2020 120

// const car1 = ['fiat', 'ford', 'fiat', 'bmw']
// const fruit = ['banana', 'melon', 'orange']
// // car1.forEach((item) => {
// //      console.log(item)
// // })
// car1.forEach.call(fruit, (item) => {
//      console.log(item)
// })

function DomSelector(selector){
     this.element = document.querySelector(selector);
}

const ul = new DomSelector('ul')
console.log(ul.element)