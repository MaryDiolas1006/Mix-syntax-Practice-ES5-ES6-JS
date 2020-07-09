
//array of riddles

const riddles = [
  'What has to be broken before it can be used?',
  'What has a head and a tail but no body?',
  'What building has the most stories?',
  'What gets broken if its not kept'
]

//array that will hold the answers to the riddles
const answers = [
  'egg',
  'coin',
  'library',
  'promise'
]


let currentRiddle = -1; 
/*
 counter which will determin the current riddle to be shown
*/

let correctAnswers = 0
//counter for correct answers

let questions = document.querySelector('#questions')
//DOM Element where we will display the questions

let input = document.querySelector('#answer')
//DOM element where the user will input his answer

addEventListener('keyup', e => {

	if(e.key === 'ArrowRight' && (currentRiddle < riddles.length-1)){
		currentRiddle++
		questions.innerHTML = riddles[currentRiddle]
		input.value = ""
		console.log(currentRiddle)
	}else if(e.key === 'ArrowLeft' && (currentRiddle > 0)){

		currentRiddle--
        questions.innerHTML = riddles[currentRiddle]
        input.value = ""
        correctAnswers = 0
	}else if(e.key === 'ArrowLeft' && (currentRiddle === 0)){

		currentRiddle--
		questions.innerHTML = 'Press The Right Arrow Key To Show The First Riddle'
		input.value = ""
		correctAnswers = 0
	}else if(e.key === 'ArrowLeft' && (currentRiddle == -1)){

		alert("Can't go back any further")
	}else if(e.key === 'ArrowRight' && (currentRiddle == riddles.length-1)) {
		alert('This is the last riddle')
	}
})




/*
 Attach a keyup event listener on the input field.
*/


input.addEventListener("keyup",  e =>{
     /*if the user input is the corret answer for the current riddle*/
     if(input.value === answers[currentRiddle]){
	//alert the user that his answer was correct.
    alert('You entered the correct answer')


	/*if the current riddle is not yet the last*/
		if(currentRiddle < riddles.length-1){
      
      //raise/increment the value of the currentRiddle counter by 1
            currentRiddle++
			
			//display the next riddle
			questions.innerHTML = riddles[currentRiddle]
			
			//clear the input
			input.value = ""
			
			//raise/increment the value of the correct Answer by 1
            correctAnswers++
		
		/*If all the riddles have been answered correctly*/
		} else if(correctAnswers === riddles.length-1){

			//reset the correct answers
			correctAnswers = 0

			//alert the user that they have finished all the questions
			alert('You Answered all the Riddles. Go Back to first Riddle and play again!')

			//reset the value of the currentRiddle to 0
			currentRiddle = 0

			//display the first riddle
            questions.innerHTML = riddles[currentRiddle]

			//reset the input
			input.value = ""

	/*If not all the riddles were answered correctly*/
		}else if(correctAnswers < riddles.length-1){

			//alert the user that they skipped a riddle and must go back to the beginning.
			alert('Please go back to answer the riddles')
			
			//reset the value of the currentRiddle to 0
			currentRiddle = 0

			//display the first riddle
            questions.innerHTML = riddles[currentRiddle]

			//reset the input
			input.value = ""

		}
	}

})




