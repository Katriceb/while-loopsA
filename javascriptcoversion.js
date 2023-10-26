/* 
We create the variables using: let, var, const

1. How do we assign a value to a variable?
 use the single = with the variable name and the new value
 (variable = value)

2. How do we change the value of a variable?
The same way, use the =
( variable = newValue )

3. For a variable, what is the difference between: 
declare - let x 
assign - this is what we did in question 1
define - let x = 5

What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

*/

// let number = 5;
// console.log('This is the value of number');
// console.log(number);
// number = 7;
// console.log('this is the new number');
// console.log(number);

// const newNumber = 10;
// console.log('This is the new number');
// console.log(newNumber);
// you cannot change a variable that is a string, number, or boolean if you initialize it as const
// newNumber = 12;
// console.log('this is the same new number');
// console.log(newNumber);

// what are the types of variable in javaScript
// boolean, string, number
// array, object


/*
STRINGS

*/
// create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// this would do the same thing
// let firstVariable = "Hello World";

// console.log('firstVariable is ');
// console.log(firstVariable);
// console.log('firstVariable is: ', firstVariable);
// console.log('firstVariable is: ', 'firstVariable');
// Change the value of this variable to some number
firstVariable = 17;
// console.log('firstVariable is: ', firstVariable);

// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// console.log('after second variable');
// console.log('firstVariable is: ', firstVariable);
// console.log('secondVariable is: ', secondVariable);

// Change the value of secondVariableto any string.
secondVariable = 'any string';
// console.log('firstVariable is: ', firstVariable);
// console.log('secondVariable is: ', secondVariable);
// What is the value of firstVariable?

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName
// so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let yourName = 'Christina';
// you can concatenate a string in two ways
// using the console.log so that we can see the concatenation, but you don't need that to concatenate
// console.log('Hello, my name is ', yourName);
// console.log('Hello, my name is ' + yourName);

/* 
BOOLEANS
*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// you could also use (a < b)
// console.log(a !== b);

// console.log(c > d);

// console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
// for || (OR), if any one thing is true, the whole thing is true
// console.log(true || false);
// console.log(false && true);
// console.log(false || false || false || false || false || true);

// console.log(false === false)

// console.log(e === 'Kevin');

// a = 4, b = 53, c = 57
// is 4 = -(53 - 57)
// console.log(a === -(b - c));
// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a + b === c);

// console.log(a !== a - d);
// note: the answer is a simple arithmetic equation, not something "weird"

// console.log(48 == '48');
// this will be false
// console.log(48 === '48');


// =========================================
// D. The Farm
// =========================================

// declare a variable animal and set it to be either "cow" or something else
// This will print "Hey! You are not a cow."
//let animal = "frog";
// animal = "cow";
// This will print "moooooooo"
//if (animal === "cow") {
   // console.log("moooooooo");
//} else {
  //  console.log("Hey! You are not a cow.")
//}


// console.log(y)
// console.log(z)

// console.log(String(x))
// console.log(x.toString())

// console.log(5 + null) // because null is converted to 0
// console.log("5" + null) // because null is converted to "null"
// console.log("5" + 2) // because 2 is converted to "2"
// console.log("5" - 2) // because "5" is converted to 5
// console.log("5" * "2") // because "5" and "2" are converted to 5 and 2
// console.log("5"/2) // will return number 2.5
// console.log("5"/"2") // When you use / on strings, the strings are implicitly converted to numbers and then division operation is performed. 
// console.log(2 + "5") // will return "25"

// MDN: https://www.w3schools.com/js/js_type_conversion.asp

// TRUTHY AND FALSY

// The following values are considered falsy:

// false
// 0
// -0
// ""
// null
// undefined
// NaN

// All other values are considered truthy! Rule of thumb: if it has a value it's truthy.

// if({}) {
//     console.log('truthy')
// } else {
//     console.log('falsy')
// }

// LOGICAL OPERATORS and COMPARISON OPERATORS
// Comparison and Logical operators are used to test for true or false.

// Comparison Operators: Comparison operators are used in logical statements to determine equality or difference between variables or values.

// == loose equality operator
// === strict equality operator

// let x = 5

// LOOSE EQUALITY DOESN'T CARE ABOUT THE DATA TYPE
// 5 == 8
// console.log(x == 8) // false
// 5 == 5
// console.log(x == 5) // true
// 5 == '5'
// console.log(x == '5') // true : type coercion. JavaScript will convert '5' into a number and compare
// console.log('5' == 5)

// STRICT EQUALITY
// 5 === 5
// console.log(x === 5) // true
// // 5 === '5'
// console.log(x === '5') // false: because both sides do not share the same data type
// console.log('hello' === 'goodbye') // false
// console.log('hello' === 'hello') // true

// let x = 5

// exclamation point ! means opposite
// 5 != 7
// console.log(x != 7) // true
// console.log(x != 5) // false

// 5 !== 5
// console.log(x !== 5) // false
// 5 !== '5'
// console.log(x !== '5') // true
// console.log(x !== 8) // true
// change to string
// x = 'hello'

// const pie = '3.14'
// console.log(Number(pie))
// console.log(Number(" "))
// console.log(Number(""))
// console.log(Number("John"))
// console.log(parseInt(pie))
// console.log(Number(8))

// let y = '5'
// let z = + y

// console.log(y)
// console.log(z)

// console.log(String(x))
// console.log(x.toString())
// console.log(5+ null)
 
//console.log("5" +2)
//console.log("5" -2)
// console.log("5" *"2")
// console.log("5"/2)
// console.log("5"/"2")
// console.log(2 +"5")


// console.log (x== 8)
// console.log(x ==5)
// console.log(x =='5')


//let x = 5

// exclamation point ! means opposite
// 5 != 7
// console.log(x != 7) // true
// console.log(x != 5) // false

// 5 !== 5
// console.log(x !== 5) // false
// 5 !== '5'
// console.log(x !== '5') // true
// console.log(x !== 8) // true

// 5 > 3

// let teo = 'teo'
// JavaScript recognizes empty space string ' ' and converts it to 0
// console.log(' ' == 0) // true

// && => AND
// true && true
// if(3 === 3 && 4 == '4') {
//     console.log('Now everybody asks me why')
//     // true
//     if(4 === 4) {
//         console.log("I'm smilin' out from ear to ear")
//         // true
//         if(3 == '3') {
//             console.log('But I know')
//         }
//     } else {
//         console.log('Come on, baby its you!')
//     }
//     console.log("Nothin's perfect, but it's worth it")
//     if(3 * 3) console.log("After fightin' through my tears")
//     if(undefined){
//         console.log('And finally, you put me first')
//     } else {
//         console.log('first')
//     }
// } else {
//     console.log('Baby, its you!')
// }
// if(teo) {
//     console.log('Finally')
// } else {
//     console.log('Youre the one for me')
// }

// Now everybody asks me why
// I'm smilin' out from ear to ear
// But I know
// Nothin's perfect, but it's worth it
// After fightin' through my tears
// first
// Finally
/*let x= computeArea
 function computeArea(width, height){

 return computeArea => width + height;
 }
 console.log('computeArea' +'area')*/

 //let number2 = 29;
 //if (number2 < 5 ){
    //console.log ("little number");
 //} else if ( number2  > 10) {
//console.log("big number");
 //}else{
  //  console.log ("monkey");
// }
  


/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.upshift] = "Orange";
console.log(fruits);*/


 