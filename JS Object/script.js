/*Module WD004 JS Programming */

/*JS Object
  
  Object contains set of information.

  creating an object. Object literals
*/

let myObject = {}

let person = {
	firstName: "TingSheng",
	lastName: "Lee",
    car: "Mustang",
    plateNo: "ABC123",
    age: 30,
    isDead: false,
    hobbies: ['eat', 'sleep', 'code']
}
 console.log(`His name is ${person.firstName}`);


/*Accessing the Object
    
    use dot notation
    object.property
      key-value pair
*/

// adding properties to an object
person['gender'] = 'male'

// unsing dot notation
person.height = 178


//nested objects

let person1 = {

	name: {
		first: 'Juan',
		last: 'Jule'
	}
}



let jaguar = {
	//properties
	color: 'red',
	maxSpeed: 400,
	//method
	start: function(speed){
		console.log(`running at the speed of ${speed} km/h`)
	},
     
     //scoping
	describe: function(){
         console.log(this);
		console.log(`juguar is color ${this.color}`)
	}
}

c