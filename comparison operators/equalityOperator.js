/*Equality Operator(==)

	returns true if both values are equal.
	If values compared are of different types, JS converts them
	and then applies a strict comparison.

	*/
	/*be careful with syntax of basic assignment (=) and equality operator (==)*/

	console.log("Equality Operator (==)")
	console.log(1 == 1)//results to true
	console.log("1" == 1)//results to true
	let ex1 = "1"
	let ex2 = "2"
	console.log(ex1 == ex2)//return false, types are same but values are different.
	console.log(1 == true)//returns true.
	console.log(0 == false)//returns true
	console.log("" == 0)//returns true ("" is converted to 0)
	console.log(" " == 0)//returns true (" " is converted to 0)
	console.log(0 == 1)//return false
	console.log(1 == false)//return false
	console.log(0 == true)//return false

	let obj1, obj2
	obj1 = {name: "a"}
	obj2 = obj1
	obj3 = {name: "a"}

	console.log(obj1 == obj2)//true refers to the same object
	console.log(obj1 == obj3)//false(it's not the same)
