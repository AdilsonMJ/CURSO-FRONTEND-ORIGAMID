console.log("DATE TYPE")

var myName = "Adilson";
var ager = 27;
var time = null;
console.log(typeof(myName)) // Return String
console.log(typeof(ager)) // Return Number
console.log(typeof(time)) // Return object => It's a bugger, null is a object

// String
var mainName = "Adilson";
var surname = "Jäger";
var fullName = mainName + ' ' +surname;
console.log(fullName) // Return Adilson Jäger

let score = 1000;
var phrase = ` Ronaldinho scored  ${score} goals  in the last game`
console.log(phrase)
console.log(typeof(phrase)) // Return String

