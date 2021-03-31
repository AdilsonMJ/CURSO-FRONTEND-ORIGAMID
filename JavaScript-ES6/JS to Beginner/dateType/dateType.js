console.log("STRING")


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
var phrase = ` Ronaldinho scored  ${score} goals  in the last game`  //Template String 
console.log(phrase)
console.log(typeof(phrase)) // Return String

//Training 
// => Set a String variable
          let theString = "Adilson"
          console.log(typeof(theString)) // Return String

// => Set a variable with number and string 
          let theMix = `Adilson Jäger has 27 years old`
          console.log(theMix) 

// => set a variable with your ager years
          let MyAger = 27
          console.log(MyAger) // Return 27 

// => Set two variables, one with name and the other with ager, join both.
          let firstName = "Adilson"
          let surName = "Jäger"
          let FullName = firstName + ' ' + surName
          console.log(FullName) // Return Adilson Jäger

// => Check the type of a variable with your name
          let myname = "Adilson"
          console.log(typeof(myname)) // Return String

