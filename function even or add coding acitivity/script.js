/*
create a function which takes one argument and determines if it is a number or NaN.
If is a NaN, it should print the message on the console
"____is not a number


*/





function numbers(num){
	if(!isNaN(num)){

		if (num%2 === 0){
			console.log(`${num} is even`)

		}else{
			console.log(`${num} is odd`)
		}
		
	}else{
		console.log(`${num} is not a number`)
	}
}

numbers(2)