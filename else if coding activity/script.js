let first = 75
let second = 85
let third = 90
let fourth = 97

console.log(`the student's first qtr grades is ${first}`)
console.log(`the student's second qtr grades is ${second}`)
console.log(`the student's third qtr grades is ${third}`)
console.log(`the student's fourth qtr grades is ${fourth}`)


let average = (first + second + third + fourth)/4
   console.log(average)

if (!isNaN(average)){

	console.log("the average is :" + average)


	if (average >=0 && average < 55) {

		console.log("the average qpi is " + 5.0 + "and student's status is failed")

		}else if (average >=55 && average < 60){

			console.log("the qpi is " + 4.0 + " and student's is failed")

		}else if (average >=60 && average < 65){

			console.log("the qpi is " + 3.0 + "and the student's status is passed")
		}else if (average >= 65 && average < 70){

		console.log("the qpi is " + 2.75 + "and the student's status is passed")

	}else if (average >=70  && average < 75){

		console.log("the qpi is " + 2.5 + "and the student's status is passed")

	}else if (average >=75  && average < 80){

		console.log("the qpi is " + 2.25 + "and the student's status is passed")
	}else if (average >=80 && average < 84){

		console.log("the qpi is " + 2 + "and the student's status is passed")
	}else if (average >=84 && average < 87){

		console.log("the qpi is " + 1.75 + "and the student's status is passed")
	}else if (average >=87 && average < 90){

		console.log("the qpi is " + 1.5 + "and the student's status is passed")
	}else if (average >=90 && average < 93){

		console.log("the qpi is " + 1.25 + "and the student's status is passed")
	}else if (average >=93 && average < 100){

		console.log("the qpi is " + 1 + "and the student's status is passed")
	}else if (average < 0 || avearge > 100){

		console.log("out of bounds")
	}		
} else {
	console.log("Not a number")
}




function grade(first, second, third, fourth) {
	 if (!isNaN(average)){

	 }
}


grade(75, 85, 90, 97)




