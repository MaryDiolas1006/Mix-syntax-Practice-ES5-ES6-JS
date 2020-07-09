/*
Multiple line comment
*/

/*
//Single line comment

*/

/*
What is Javascript?
1. JS is the most popular programming language and acts a great foundation for developers
2. JS makes websites/pages interactive.
3. JS is our first programming language - This is the first time we will write something 
   will tell our page what to do programatically.

*/


/*
Using console.log

The console.log() method writes a message to the console.
The console s useful for testing purposes.
console.log tells the computer to print specified message on the console.
*/

console.log('hello world');

// Js is case-sensitive
// console.Log('Hello, world')
// This code resukt in an error because console.Log is not the same as console.log

/*
Statements and syntax
In programming, statements are instructions that we tell the computer to perform.
JS statements usually end in semi-colon(;). But it is not required.
*/


/*
Variables

are containers for data.
A variable is a name location for storing a value

*/

let x = "Somebody you used to know."

console.log(x)

/*
Variables Declarations
use the let keyword followed by variable name and then
use the assignment operator(=) to assign a value.
variable names can contain letters, digits, undercores or dollor signs
Variable name must begin with a letter.
Variable names is case sensitive.

*/

let Avatar="Korra"
console.log(Avatar)


/*
As a best practice, strt variable names with a lower case letter
and use camelCase for multiple words.
variable names should be indicative or descriptive
of the value being stored to avoid confusion

*/

let productName = "soap";
let productId = "s-123";

console.log(productName);
console.log(productId);


/*Multiple declarations*/
let productName2 = "shampoo", productId2 = "s-123"

console.log(productName2, productId2);


/*Variable error*/
// console.log(productNme)
// the above code will result in a referenceError:
// ProductNme is not define. this means that the variable that we specified was not
// not given a value or does exist. Be careful with the spelling in Js.(variables, keywords, etc)

// Common Errors
// let class = "Batch 58";
// let Number = 25; 

/* Class is a reserved keyword in JS and cannot be used as a variable name
Number is also a reserved keyword in Js it can be used a variable name but
might show a different behavior in the long run.*/


/*JS is a loosely-typed programming language.
Though JS recognize the data type, you don't have to explicitly
declare what the variable's type is.
You can also change the variable's type on the fly.
The only way to set a variable's type in Js is to assign a value of 
that type to the variable.*/

/* Data Types
the type of data that a variable holds. In our previous examples,
the values of the variables were all string data.

Data Types fall into 2 categories:
Primitive and Objects.
*/

/* Data Types - String 
  includes aphanumeric characters and special characters which have to be enclosed
  in either single or double quotes.
*/

let name = "George Estregan"
// string has a .length property

console.log(name.length);
// will result in 15 included the space

console.log(typeof name);
//to check what kind of data types 

/*Concatenation*/
// let firstName = 'Jhon';
// let lastName = 'Smith'

// let fullName = firstName + lastName;
// console.log(fullName);

// fullname = firstName + "" + lastName;
// console.log(fullName)

// console.log('My first name is' + firstName + ', and my last name' + lastName);
// console.log(`My first name is ${firstName}.`)


/* Activity
1. Assign your first name to a variable.
2. Assign your last name to a variable.
3 Assign Zuitt coding Bootcamp to a variable.

send a message to the console which would look like this:
Hi, I'm (first name here)(last name here) and I study web development at Zuitt coding Bootcamp.
*/

let firstName2 = 'Mary'
let lastName2 = 'Diolas'
let Zuitt = 'and I study web development at Zuitt Coding Bootccamp'

console.log(`Hi, I'm ${firstName2} ${lastName2} ${Zuitt}`)

let num1 = 2;
let num2 = 3;

console.log(num1+num2);

let num3 = "2"

console.log (num3+num2);

/*Data Types - Numeric/number
Includes all possible numeric values
including NaN{not a number}, positive infinity or negative infinity.
Do not enclose with a quote or a double quote.
NaN is generated when a match function falis or when trying to parse a number fails.
NaN is the only value in Js that does not Equal itself.
The surest way to determine if something in Js in NaN is to compare it against itself.
If it returns false it is NaN(Not a Number)

we use numbers/numeric data-type for computations.
*/

// let number1 = one;
// let number2 =2;

// console.log(number+number2);
 
// let numberNaN = parseInt("2");
// console.log(numberNaN);

let number4 = 5;
let number5 = 6;

console.log(number4 + number5);
/*Js will properly compute the numbers if the data types are correct*/

/*Boolean 
  Holds true or false.
*/

let isHappy = true;
let isSad = false;

console.log(isHappy);

/*Undefined
 represents the state of a variable that's been declared
 but has no assigned value
*/

let firstResponder

console.log(firstResponder);
firstResponder = "EMT"
console.log(firstResponder);

/*Null
used to intentionally express the absence of a value in a variable declaration*/

let y = null;
console.log(y);

/*Object
 Objects are variables too. But objects can contain many values.
 The values are written as name: value(name and value separated by a colon).
 A JS object is a collection named values.
 The named values in JS obbjects are called prperties.
*/

let person = {
	name: 'Jake Doe',
	age: 30,
	isEmployed: true
}

console.log(person.name);
console.log(person.isEmployed);

/*When creating an object make sure that each property is separated a comma*/

/* Arithmetic Operators 
mathematical operations are carried out using simple operators

+ for addition
-for substraction
* for multiplication
/ for division
% for remainder 
() for overriding only compute correctly when using the appropraite
data type(numbers/numeric)*/

let price = 500.50;
let quantity  = 2;
let product = price * quantity

console.log(product);
console.log(price*quantity); //both output will be 1001

let mdas = 3+4*5;

console.log(mdas);

let pmdas = (3+4)*5;
console.log(pmdas);

let quotient = 20/5
console.log(quotient);

let quotient2 = 7/3;
console.log(quotient2);

/*modulo*/
let remainder = 22%7;
console.log(remainder);

/*increment operator (++)
increment operator adds to the operand and reuturns a value*/

let number6 = 10;
let increment= ++number6
console.log(increment);

/*Decrement operator (--)
decrement operator subtracts one to the operand
and returns a value.*/

let number7 = 11;
let decrement = --number7;
console.log(decrement);


/*Assignment Operator
  Basic assignment operator (==)
  the assignment operator substitutes/add the value of the right operand to a variable and assigns the result to the variable

*/

let numberEx1 = 15;
let numberEx2 = 5;

let sum = numberEx1 + numberEx2
console.log(sum); //result to 20
// sum = numberEx2
// console.log(sum); // results to 5

/* Addition Assignment Operator
  The addition assignment operator adds the value of the right operand
  variable and assigns the result to the variable
*/

console.log(sum+5);
console.log(sum); //retains original vale 
sum +=5

console.log(sum); // will result to 25


/* Substraction assignment operator*/

console.log(sum-10)//result to 15
console.log(sum)//result 25

sum -= 10
console.log(sum);

/*Postfix and Prefix Increment/Decrement*/
let postfix = 5;
console.log(postfix++) // returns the value before incrementation
console.log(postfix);

/*the code is read left to right therefore the returning the variable
before incrementing*/


let prefix = 6;
console.log(++prefix);

console.log(postfix)//result to 6
console.log(prefix)//result to 7

/*Like addition/substraction assignment operators the value is save
into the variable incremented*/

/*multiplication,division,modulo assignment operators*/
let newProduct = 5;
console.log(newProduct *= 25);
console.log(newProduct);//value is saved and is now 125

let newQuotient = 10;
console.log(newQuotient /= 5);
console.log(newQuotient) //result to 2

let newMod = 100;
console.log(newMod %= 10)
console.log(newMod)//result to 0

/*Type conversion/coercion
when Js is given an operation with conflicting data types,
it tries to normalize them first before performing the operation.

This is why numbers in a mathematical operation are converted to strings
when a string is included in the operation

Adding a number to a boolean will cnvert the boolean to eithie 0 (false)
or 1 (true) before performing the operation*/

/*Comparison Operators

Used to compare 2 values and return either true or false
JS has both strict and type-converting comparisons
A Strict comparison (===)is only true if the operands are of the same
type and the contents match.
the more commonly used(==) is an abstract comparison, which converts the operands to the same
type before making a comparison*/

/*Equality Operators (==)

  returns true if both values are equal.
  If values compared are of different types, JS converts them
  and then applies a strict comparison

*/

/*be careful with syntax of basic assignment (=) and equality operator (==) */

console.log('Equality Operator (==)')
console.log(1 == 1); //results to true
console.log('1' == 1) // results true. coercion convert the value
let ex1 = "1"
let ex2 = "2"
console.log(ex1 == ex2)//false
console.log(1 == true); //true
console.log(0 == false)//true
console.log("" == 0)//returns true "" is converted to 0
console.log(0 == 1)//false
console.log(1 == false)//false (false is converted to 0)
console.log(0 == true)//false (true converted to 1)

let obj1, obj2
obj1 = {}
obj2 = obj1
obj3 = {}
console.log(obj1 == obj2);//true refers to the same object
console.log(obj1 == obj3)//false not the same object

/*Strict Equality Operator
  A strict comparison (===) is only true if the operands
  are of the same type and the contents match. Performs no type conversion.

*/

console.log('Strict Equality Operator (===)')
console.log(1 === 1)//true
console.log("1" === 1)//false
console.log(1 === true)//false
console.log(0 === false)//false
console.log("" === 0)//false


/*Inequality Operator (!=)
  the inequality operator returns true if the operands are not equal
  same as equality operator, inequality operator will convert the data type.
*/

console.log("Inequality Operator (!=)")
console.log(1 != 1)//false
console.log(2 != 1)// true
console.log("2" != 1)//true
console.log(1 != true)//false (true converted to 1)
console.log(0 != true)//true (true converted to 1)
console.log("" != 0)//false ("" converted to 0)
console.log("" != 1)//true ("" converted to 0)

let objNe1, objNew2
objNew1 = {}
objNew2 = objNew1

console.log(objNew1 != objNew2)//false
console.log(objNew1 != {})//true


/* Strict Inequality Operator (!==)
  Strict Inequality operator returns true if the 
  values are not strictly equal
 */

 console.log("Strictly Inequality Operator")
 console.log(1 !== 1)//false
 console.log("1" !== 1)//true
 console.log("1" !== "1")//false
 console.log(1 !== true)// true
 console.log("true" !== true)//true
 console.log("false" !== false)//true
 console.log("false" !== "false")//false
 console.log("" !== 0)//true

let objStrict1, objStrict2;
 objStrict1 = {};
objStrict2 = objStrict1;

console.log(objStrict1 !== objStrict2)//false
console.log(objStrict1 !== {})// true


/*Relational Operators
  Greater than (>)
  Returns to if the value on the left of the operator
  is greater than the value of the operand on the right.
  Type-conversion occurs before comparison. 
*/


console.log("Relational Operators: Greater Than (>)")
console.log(0 > 1)//false
console.log("" > 1)// false ("" converted to 0)
console.log("5" > 2)//true ("5" converted to 5)
console.log("10" > "5")//false

/*Greater than or equal to (>=)
   returns true if the value on the left is greater
   or equal the value on the right.
   Converts type if they different.
 */ 
console.log("Greater than or Equal to")
console.log(5 >= 5)//true 5 is equal to 5
console.log("7" >= 4)//true "7" converts 7
console.log(0 >= "0")//true "0" converted to 0


/*Less than Operator (<) 
  returns true if the value on the left is less than 
  the value on the right.
  Converts type if they different
*/


console.log("Less Than (<)")
console.log(0 < 1)// true
console.log(5 < 2)//false
console.log("5" < 5)//false "5"converted to 5


/*Less Than or Equal to (<=)
   returns true if the value on the left is less or equal
   than the value on the right.
   Type conversion occurs before comparison.

 */

 console.log("Less Than or Equal to")
 console.log(6 <= 12)//true 
 console.log(0 <= 1)//true
 console.log("7" <= 7 )//true "7" converted to 7



/*var vs let vs cost
  var, let and const allows us to create variables with some differences
*/


var fName = "Mike"
var fName = "Jhon"

console.log(fName);

let fName2 = "Mick"
fName2 = "Mick"
console.log(fName2);

const fName3 = "Foley"
console.log(fName3)


/* Functions 
  a way of grouping operations under a given name so
  so that they can be called repeatedly

*/


function saySomething() {
  alert('Hello there')
}

saySomething();

/*the use of () is for passing values as arguments into the function */

function saySomethingBack(msg){
  alert(msg)
}

saySomethingBack("General Kenobi!");

function add(numero1,numero2){
  return numero1 + numero2
}

console.log(add(2,3))

/*mini-activity 
 Create a dog Years calculator!
*/

function dogYears(humanYears, dogYears){
  return humanYears * dogYears
}

console.log(dogYears(4,7));

/* Scope 
  variables can exist in either 1 of 2 scopes:
  global scope - not declared within a function, available everywhere
  local scope - declared within a function, only available within.

*/

let governor ="Ynares"
function fNames(nme) {
  let govFirstName = "Mike"
  console.log (`His name is ${govFirstName} ${governor}`)

}

// fNames();
// console.log(governor);

function rizalGov(){
  let governorName = "jun"
  console.log(`Rizal's governor is ${governorName} ${governor}`)
}

rizalGov();

/*Global Variables can be accessed by any function
but local variables can't*/




function fullName(){
  let firstName = "Juan"

  function alertFullName(){
    let lastName = "dela Cruz"
    alert("Full Name:" + firstName + " " + lastName)
  }
  alertFullName();
}

fullName();



let a = "a"

function levelb(){
  let b = "b"
  function levelc(){
    let c = "c"
    function leveld(){
    let d = "d"
    console.log("level d", a, b, c, d)
    }
    leveld();
    console.log("level c", a, b, c)
  }
  levelc();
  console.log("level b", a, b)
}

levelb();


/*hoisting
  hoisting is a JS mechanism where variables and function
  declarations are moved to the top of their scope before code execution.

*/


// console.log(girl)
// const girl = "Emma"

function nameHer(){

var herName = "Audrey"
console.log(herName)

}

nameHer();

/*mini-activity Fahrenheit converter
  Create a function that will take one argument(Degrees Fahrenheit)
  and convert it to Celsius

*/

 
function fToCConverter(fahrenheit){
   const fTemp = fahrenheit;
   const fToCel = (fTemp - 32) * 5 / 9; //use pmdas
  console.log(`${fTemp}degrees Fahrenheit is equal to${fToCel} Celsius`)
  
    
} 

fToCConverter(212);









/*activity instruction

1. assign 25 and to variable first and second.
2. display the values of each variables
3. display the sum of the first variables and 5.
4 Add 5 to the second variable and save the sum to itself.
5. substract the second variable from the first variable save the
difference to a new variable. (display)
6. multiply the first and second variables and save the product 
  to a new variable.(display)
 7. Divide the first variable by the second variable and save the quotient
   to a new variable.(display)
 8. Display the remainder from step 7
*/


let first = 25
let second = 5 
console.log(first); 
console.log(second);
console.log(first + 5);
second += 5
console.log(second);
let difference = first - second
console.log(difference);
let product1 = first * second
console.log(product1);
let quotient3 = first / second;
console.log(quotient3);
let modulo = first % second
console.log(modulo);




