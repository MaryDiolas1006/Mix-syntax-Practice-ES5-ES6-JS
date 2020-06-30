/*

	Arithmetic Operators
	mathematical operations are carried out using simple operators

	+ for addition
	- for subtraction
	* for multiplication
	/ for division
	% for remainder
	() for overriding the default operational priority(MDAS)

	Arithmetic operators only compute correctly when using the appropriate
	data type (numbers/numeric)

	*/

	let price = 500.50;
	let quantity = 2;
	let product = price * quantity
	console.log(product)
	console.log(price*quantity) //both outputs will be 1001


/*mdas*/
	let mdas = 3+4*5;
	console.log(mdas);//23

	/*override*/
	let pmdas = (3+4)*5;
	console.log(pmdas);//35

	let quotient = 20/5;
	console.log(quotient);

	let quotient2 = 7/3;
	console.log(quotient2);

	/*modulo*/
	let remainder = 22%7
	console.log(remainder)

	/*increment operator (++)
	increment operator adds one to the operand and returns a value
	*/

	let number5 = 10;
	let increment = ++number5
	console.log(increment);

	/*decrement operator (--)
	decrement operator subtracts one to the operand and returns a value.
	*/

	let number6 = 11;
	let decrement = --number6
	console.log(decrement)

	/*

	Assignment Operator
	
	Basic Assignment Operator (=)
	The assignment operator substitutes/add the value of the right operand to a variable and
	assigns the result to the variable

	*/

	let numberEx1 = 15
	let numberEx2 = 5
	let sum = numberEx1 + numberEx2
	console.log(sum) //results to 20

/*	sum = numberEx2*/
/*	console.log(sum) //results to 5*/

	/*Addition Assignment Operator
		The addition assignment operator adds the value of the right operand to a
		variable and assigns the result to the variable.
	*/

	console.log(sum+5)

	console.log(sum)//retains original value.

	sum += 5

	//sum = sum + 5

	console.log(sum)//will result to 25

	/*subtraction assignment operator*/

	console.log(sum-10)//result to 15

	console.log(sum)//result 25

	sum -= 10

	console.log(sum)


	/*activity instruction

		1. assign 25 and 5 to variables called first and second.
		2. display the values of each variables.
		3. display the sum of the first variable and 5. 
		4. Add 5 to the second variable and save the sum to itself. (display)
		5. Subtract the second variable from the first variable save the
		   difference to a new variable.(display)
		6. Multiply the first and second variables and save the product 
		   to a new variable. (display)
		7. Divide the first variable by the second variable and save the quotient
		   to a new variable. (display)
		8. Display the remainder from Step 7

	*/


let first = 25
let second = 5
console.log(first + 5);
second += 5;
console.log(second);
let diference = first - second;
console.log(second);
let Product = first * second;
console.log(Product);
let quotient1 = first / second;
console.log(quotient1);
console.log(first%second);


/*Basic, Addition and Subtraction Assignment Operator in the console.log*/

	let newPrice = 35;
	console.log(newPrice = 36);
	console.log(newPrice)//result is 36

	let newPrice2 = 250
	console.log(newPrice2 += 50)
	console.log(newPrice2)//result to 300

	let newPrice3 = 100
	console.log(newPrice3 -= 25)
	console.log(newPrice3)//result is 75


	/*Postfix and Prefix Increment/Decrement*/

	let postfix = 5;
	console.log(postfix++)//returns the value before incrementation
	console.log(postfix)

	/*the code is read left to right therefore the returning variable
	before incrementing*/

	let prefix = 6;
	console.log(++prefix)//


	console.log(postfix)//results to 6
	console.log(prefix)//results to 7

	/*like addition/subtraction assignment operators the value is saved into the
	variable incremented.*/


/*multiplication,division,modulo assignment operators*/

	let newProduct = 5;
	console.log(newProduct *= 25);
	console.log(newProduct);//value is saved and is now 125

	let newQuotient = 10;
	console.log(newQuotient /= 5);
	console.log(newQuotient);//results to 2

	let newMod = 100;
	console.log(newMod %= 10)
	console.log(newMod)//results to 0

/*

