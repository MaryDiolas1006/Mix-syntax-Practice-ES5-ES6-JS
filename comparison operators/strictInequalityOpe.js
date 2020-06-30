/*
		Strict Inequality Operator (!==)
		Strict Inequality Operator returns true if the values are not 
		strictly equal.

	*/

	console.log("Strict Inequality Operator(!==)")
	console.log(1 !== 1);//false
	console.log("1" !== 1);//true
	console.log("1" !== "1");//false
	console.log(1 !== true);//true
	console.log("true" !== true);//true
	console.log("false" !== false);//true
	console.log("false" !== "false");//false
	console.log("" !== 0);//true

	let objStrict1, objStrict2;
	objStrict1 = {};
	objStrict2 = objStrict1;


	console.log(objStrict1 !== objStrict2)//false (refers to same obj)
	console.log(objStrict1 !== {})//true

