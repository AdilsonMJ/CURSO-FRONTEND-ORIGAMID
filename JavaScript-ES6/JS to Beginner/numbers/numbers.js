console.log("Numbers")


var ager = 23;
console.log(ager)


var Addition = 100 + 100;  // Return 200
var Subtraction = 100 - 50; // Return 50
var Multiplication = 100 * 2; // Return 200
var Division = 100 / 2; // Return 50
var Exponent = 2 ** 4;  // Return 16
var Remainder = 14 % 5; // sometimes called modulo  // Return 4

console.log(isNaN(Division)) // False
console.log(isNaN(Addition / ' jaja ')) //Nan = Not A Number

//Bollean 
// True or False 

var Graduated = true;

if(Graduated) {
          console.log('This is true')
} else{
          console.log('this is false')
}

// Falsy 
/*

if(false)
if(0) or if(-0)
if(NaN)
if(null)
if(undefined)
if('') or if("")

*/

if(!Graduated){ // User ! to changer the return, without ! the return is true and now is false
          console.log('this is false')
}

 