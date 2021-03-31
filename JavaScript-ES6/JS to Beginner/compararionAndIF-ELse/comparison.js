console.log("Comparison Operators")

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

/*
// == equal to
          x == 8   => false
          x == x  => true
          x == "8"   => true

// equal value and equal type
          x === 8   => false
          x === "8"   => false
          x === x => true

// != not equal
          x != 8 => True

// !==	not equal value or not equal type	
          x !== 5	false	
          x !== "5"	true	
          x !=== "5" false	
          x !== 8	true

// > greater than
	5 > 8	false
// < less than
	5 < 8	true	
// >=  greater than or equal to
	5 >= 8	false	
// <= less than or equal to	
          5 <= 8	true

2 < 12                 true
2 < "12"              true
2 < "John"          false
2 > "John"          false
2 == "John"        false
"2" < "12"           false
"2" > "12"           true
"2" == "12"         false

When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.


Operador      Description         Example

&&                  Adilson           (x < 10 && y > 1) is true	
||                       or                    (x == 5 || y == 5) is false	
!                        not                 !(x == y) is true

*/

//variablename = (condition) ? value1:value2 
//var voteable = (age < 18 ) ? "Too young":"Old enough";

var voteable;
let age  = Number(12);
if(isNaN(age)){
          voteable = "Input is not a number"
} else {
          voteable = (age <=18 ) ? "Too young" : "Old enough"
}

console.log(voteable)

// Use switch to specify many alternative blocks of code to be executed

let color = "pink";

switch(color){
          case  "blue":
                    console.log(color)
                    break;
          case  "red":
                    console.log(color)
                    break;
          case  "green":
                    console.log(color)
                    break;
          case  "grey":
                    console.log(color)
                    break;

          default: 
          console.log("Dammit man! Are you can choise a easy color???? ")
}


// Training

// => Check if my ager is bigger them another person. Return  Bigger, smaller or equal

let MyAger = 22
let person2 = 21
var checking;

if(MyAger == person2){
          var checking = "Equal"
} else {
          var checking = (MyAger >= person2) ? "Bigger" : "Smaller"
}
console.log(checking)