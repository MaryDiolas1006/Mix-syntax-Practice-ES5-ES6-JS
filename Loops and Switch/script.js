/*Switch Statements
 We can string together if else statements to form logical
 decision tree

*/

/*simulate a dice roll*/

let diceRoll = Math.floor(Math.random()* 6) + 1;
/*Math.floor in Js is a math object method rounds
down a passed in number*/
/*Math.random() generates a random number between 0 & 1
(inclusive of 0 not 1)*/

console.log(diceRoll);

if( diceRoll === 4){

	console.log('you rolled a four')

}else if(diceRoll === 5){

   console.log('You rolled a five')

}else if (diceRoll === 6){

	console.log('You rolled a six')

}else{

	console.log('You rolled a number less than 4')
}


/*Switch can be used instead*/

switch(diceRoll){

	case 4:
	console.log('you rolled a four')

	break;

	case 5:
	console.log('Your rolled a five')
	break;
	case 6:
	console.log('You rolled a 6')
	break;

	default:
	console.log('You rolled a number less than 4')
	break;
}

//

let avg = 85

switch(true){

	case (avg >= 80 && avg < 84):
	console.log('the qpi is' + 2.0 + "and the students student's status is passed")
	break;

	case (avg >= 84 && avg < 87):
	console.log('The qpi is' + 1.75 + "and the student's status is passed")
	break;

	default:
	console.log('Not within range')
	break;
}


let enemyHP = 1250;
let attack = 200;
/* mini-activity 
dwindle the enemy HP to 0 attacks using switch.
Each time attack is made, the enemy HP's value is saved to itself*/

function attackInput(atkString){

	switch(atkString){

		case "hadouken":
		console.log(`You used hadouken: enemyHP is ${enemyHP -= attack} enemyHP`)
		break;

		case "kamehameha":
		console.log(`You used kamehameha: enemyHP is ${enemyHP -= attack} enemyHP`)
		break;
        

        case "kamekameweee":
		console.log(`You used kamekameweee: enemyHP is ${enemyHP -= attack} enemyHP`)
		break;

		case "abrakadabraaaa":
		console.log(`You used abrakadabraaaa: enemyHP is ${enemyHP -= attack} enemyHP`)
		break;

		case "Zengzeng":
		console.log(`You used Zengzeng: enemyHP is ${enemyHP -= attack} enemyHP`)
		break;

		case "bruahhhhhh":
		console.log(`You used bruahhhhhh: enemyHP is ${enemyHP -= attack} enemyHP`)
		break;

		case "you'reDone":
		console.log(`You used you'reDone: enemyHP is ${enemyHP -= 50} enemyHP`)
		break;
		

		default:
		console.log('Invalid attack')
		break;
	}
}

attackInput("hadouken");
attackInput("kamehameha");
attackInput("kamekameweee");
attackInput("abrakadabraaaa");
attackInput("Zengzeng");
attackInput("bruahhhhhh");
attackInput("you'reDone");



/*switch practice*/

let person1 = "TingSheng"
let person2 = "Mary"

function Beba(person){

	switch(person){

		case "Job Title":

		console.log(`${person1} is a lead Web Developer`)
		break;

		case "Job Title2":

		console.log(`${person2} is a Junior Web Developer`)
         break;

         default:

         alert("They are web developer")
	}
}


Beba("Job Title");
Beba("Job Title2");


/* LOOPS
used to repeat pieces of code over nd over according to certain conditions

*/

/*WHILE LOOPS 
runs a block of code while the given condition is true 
while(condition){
	do something
}

*/


let tasks = 7;
// pass in the condition for the while loop

while(tasks > 0 ){
	//the below code will be repeated as long as tasks > 0

	console.log(`there are ${tasks} tasks left`)

	//decrement tasks every iteration

	tasks--;
}


let count = 1

while(count <= 10){

	console.log(`The number is ${count}`)

	count++;
}

// mini-activity
let number = -10

while(number <= 19) {

	console.log(`The number is ${number}`)

	number++;
}


// get add numbers from 300 to 333
let counter = 300;

while(counter < 333){

	if(counter%2 !== 0){

		console.log(counter)
	}

	counter++;
}


// mini-activity even numbers from 10 through 40

let number2 = 10 

while(number2 < 41){

	if(number2%2 == 0){
		console.log(number2)
	}

	number2++;
}



/*DO... WHILE LOOPS
 similar to a while loop, only difference being the condition is givn AFTER code block.

 do {
	do something 
 }while(condition)



this way, the block of code will always be run AT THE ONCE,
regardless of the condition being true or not the tasks while loop
example can be written as a do ... while with the same results:
*/

let newTasks = 5;

do {

	console.log(`There are ${newTasks} tasks left`);

	newTasks--;
}while(newTasks > 0)


/*the above example guarantees that the code block will be run at least once no matter
what value is assigned to the variable tasks*/

let newTasks2 = 0;

while(newTasks2 > 0){

	console.log(`${newTasks2} left`)

	newtasks--;
} // this won't run


/*FOR LOOPS
  for(initialization; condition; after){
	do something
  }

   the initialization is run BEFORE the loop starts unsually used to initialize 
   variables to be used in the loop.


   The condition has to be satisfied on each iteration for the code block to be run.
   The loop will stop once the condition is no longer met.


   The after code specifies what to do after each iteration of the loop,
   typically used to increment/decrement a counter of some sort.

   We can write the above tasks while loop as a for loop:

*/

for(let forTasks = 5; forTasks > 0; forTasks--){

	console.log(`There are ${forTasks} tasks left`);
}

for(let countdown = 10; countdown >=10; countdown--){
	console.log(countdown);
}

let num = 5
for(let x = 1; x <= 10; x++ ){

	console.log(num * x)
}


/*create two for loops for multiplication tables of 7 and 9*/

let ex1 = 7
let ex2 = 9


for(let t = 1; t <= 10; t++ ){
	console.log(ex1 * t)
}


for(let s = 1; s <= 10; s++ ){
	console.log(ex2 * s)
}



/* NESTED FOR LOOPS 
  you can place a loop inside another loop to create a nested loop

  The inner loop will run all the way through before the outer loop iterates

*/


for(let x = 1; x <= 3; x++){

	console.log(`hello form outer loop, this is no. ${x}`)

	for(let y = 1; y <= 3; y++){

		console.log(`hello from inner loop, this is no. ${y}`)
	}
}


for (let x = 1; x <= 3; x++){

	for(let y =1; y <= 3; y++){

		console.log(x + y);
		/*1st iteration of outer loop the x (outer loop) =1
          x + y 1 + 1 = 2 1st iteration of inner loop
          x + y 1 + 2 = 3 2nd iteration of inner loop
          x + y 1 + 3 = 4 3rd iteration of inner loop
          2nd iteration of outer loop x = 2
          x + y 2 + 1 = 3 1st of iiner loop during 2nd iteration
         and so on iteration
    
		*/
	}



}


// mini-activity
	/* Using a nested loop create a multiplicaion from 1 through 10*/

	for (let t = 1; t <= 10; t++){

		for (let s = 1; s <= 10; s++){

			console.log(t * s)
		}
	}








