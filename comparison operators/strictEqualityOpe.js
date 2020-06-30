/*

	Strict Equality Operator
	A strict comparison (===) is only true if the operands are of the same type
	and the contents match. Performs no type conversion.

	*/

	console.log("Strict Equality Operator (===)")
	console.log(1 === 1)//returns true same value
	console.log("1" === 1)//returns false same value but different data type.
	console.log(1 === true)//returns false
	console.log(0 === false)//returns false
	console.log("" === 0)//returns false
	console.log(" " === 0)//returns false
	console.log(1 === false)//returns false
	console.log(0 === true)//return false

	
