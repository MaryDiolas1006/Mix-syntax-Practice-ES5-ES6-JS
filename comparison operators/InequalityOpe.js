/*

	Inequality  Operator (!=)

	the inequality operator returns true if the operands are not equal.
	same as equality operator, inequality operator will convert the data-type

	*/

	console.log("Inequality Operator (!=)")
	console.log(1 != 1)//returns false
	console.log(2 != 1)//returns true
	console.log("2" != 1)//return true
	console.log(1 != true)//return false
	console.log(0 != true)//return true
	console.log("" != 0)//return false
	console.log(" " != 1)//return true

	let objNew1, objNew2
	objNew1 = {}
	objNew2 = objNew1

	console.log(objNew1 != objNew2)//returns false
	console.log(objNew1 != {})//
