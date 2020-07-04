let evenSum = 0;
let oddSum = 0;

for(let x = 1; x <= 50; x++){
    
  // this code block will run if the value of x is even
		/*console.log("Even: "+ x)*/
		// accumulate all sum for even nos.

	 if(x%2 == 0){
	 	evenSum += x

	 	
	 }else{
	 	// this code block will run if the value of x is odd
		/*console.log("Odd: "+ x)*/
		// accumulate all sum for odd nos.


	 	oddSum += x

	 	
	 }
	 
}

console.log(`the sum of all even numbers from 0 to 50 is ${evenSum}`)
console.log(`the sum of all odd numbers from 0 to 50 is ${oddSum}`)