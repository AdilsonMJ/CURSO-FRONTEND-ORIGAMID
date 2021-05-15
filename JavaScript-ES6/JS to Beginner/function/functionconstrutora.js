function Car (maxspeed = 280, delta = 5){
     // atributo privado 
     const self = this
     let atualspeed = 0;

     // metodo publico
     this.acelerar = function(){
               if(atualspeed + delta <= maxspeed){
                    atualspeed += delta
               } else {
                    atualspeed = maxspeed
               }
     }

     // metodo publico
     this.getatualspeed = function(){
          return atualspeed
     }

     this.pisarfundo = setInterval(function(){
             if(atualspeed + delta <= maxspeed){
               atualspeed += delta
              console.log(atualspeed)
             }else{
                    atualspeed = maxspeed
              }
          }, 1000)}
     
// const uno  = new Car
// uno.acelerar()
// console.log(uno.getatualspeed())

// const  mustang =  new Car(350, 30)
// mustang.acelerar() // 5
// mustang.acelerar() // 60
// mustang.acelerar() // 90
// console.log(mustang.getatualspeed())

// console.log(typeof Car) // function
// console.log(typeof mustang) // object

let mini = new Car
console.log(mini.pisarfundo)

/*
Usar sempre let no lugar de var
*/