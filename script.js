/*functions

	a way of grouping operations under a given name so that they can
	be called repeatedly.

*/

	function saySomething(){

		alert("Hello there.")

	}

	//the use of () is for passing values as arguments into the function

	function saySomethingBack(msg){

		alert(msg)

	}


	function add(numero1,numero2){

		return numero1 + numero2

	}

	console.log(add(2,3))


age = (humanYears, dogYears) => {
  
  return humanYears * dogYears

}


  console.log (age(4, 7));

let governor = "Ynares"
	function fNames(nme) {
			let govFirstName = "Mike";
			console.log(`His name is ${govFirstName} ${governor}.`);

	}

	fNames();
/*	console.log(governor);
	console.log(govFirstName);*/

	function rizalGov(){

		let governorName = "Jun"
		/*console.log(`Rizal's Governor is ${govFirstName} ${governor}`)*/

	}

	rizalGov();

	/*Global Variables can be accessed by any function but Local Variables can't*/


	function fullName(){
		 let firstName = "Juan"

		 function alertFullName(){
		 	let lastName = "dela Cruz"
		 	alert("Full Name: " + firstName + " " + lastName)
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



/*hoisting

	hoisting is a javascript mechanism where variables (var) and function declarations
	are moved to the top of their scope before code execution.

*/
/*console.log(girl)
const girl = "Emma"

function nameHer(){

	console.log(herName)
	var herName = "Audrey"

}

nameHer()
*/
/*mini-activity 
	
	Fahrenheit to Celsius Converter

	Create a function that will take one argument (Degrees Fahrenheit) and
	convert it to Celsius. It should display the following on the console:
	"___ degrees Fahrenheit is equal to ____ degrees Celsius."
	100 degrees Celsius = 212 Fahrenheit
*/

function fToCConverter(f){

	let fToCelsius = (f - 32 )*5/9
	
	console.log(`${f} degrees Fahrenheit is equal to ${fToCelsius} Celsius`)

}

fToCConverter(212);
