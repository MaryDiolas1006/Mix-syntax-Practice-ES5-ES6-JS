// create an array of movie objects, each objects has the ff properties:
// title - string
// hasWatched = boolean
// rating - number data type

//CREATE function
//2) validate the following:
//a) all parameters have been given a corresponding argument
//-if it is, you can straight away push your new movie object
//*if duplicate found, say so in a console.log() notification
// Hint: you may use the following array methods
// filter
// find
// RETRIEVE function
//1) validate that the movies array is NOT empty
//a) if it is empty, say so in your console.log
/*b) if not, loop through all the objects in the array, displaying all the properties
of every object in the console as you do so
Hint:
forEach

*/



let movies = [
  {title: "frozen", watched: true, rating: 9},
  {title: 'black panter', watched: true, rating: 3}
]


//1) identify how many parameters are needed in the function expression
const addMovie = (title, watched, rating) => {

//b) passed in arguments are of the correct data type
	if (title !== "undefined" && watched !== "undefind" && rating !=="undefined"){

		if(title === "string" && watched === "boolean" && rating === "number"){

//c) check that the movies array is NOT empty
			if(movies.length > 0 ){

//-if it is NOT, check for duplicates
               let dupMovie = movies.some( movie => {

               	return movie.title === title
               })

                  if (hasDuplicate) {
                      console.log("Movie already Exist")
                  }else {
//*if no duplicates found, push the new movie object to movies array
                  	console.log("Movie do not exist")

                  	//add to movie list
                  	let movie = {
                  		title:title,
                  		watched: watched,
                  		rating:rating
                  	}

                  	movies.push(movie)
                  }
                   
			}else{
                let movie = {
                  		title:title,
                  		watched: watched,
                  		rating:rating
                  	}

                  	movies.push(movie)
            
			}

		}else{

			console.log('Title must be a string, watched must be a boolean, and rating must be a number');
		}

	}else {

		console.log("function needs 3 arguments")
	}
}


const showMovies = function() {
	if(movies.length < 0) {

		console.log('no movies inside an array')
	}else{

		movies.forEach(movie => {

			console.log(`Title: ${movie.title}`);
			console.log(`Watched: ${movie.watched}`);
			console.log(`rating: ${movie.rating}`);
		})
	}
}




//practice instructions
//calculator(add,sub,divide,multiplication)
/*
  todolist(list of strings)(add, edit, delete, items in list)

  array of string

  add person in the database array
  (name, age, password)
  register(mga details)
*/

/*
 login
 find the user by name
 login(name)
 regitered? buong profile: "not registered"
*/

/*
  rock paper and scissors
*/



let person = [
  'TingSheng',
  30,
  "web developer"
]

showPerson = () => {

     if(person < 0){

     	console.log('no person available')
     }else {

         person.forEach(person => {

         	console.log(person)
         })
     }
}


addPerson = (newPerson) => {
  
  person.push(newPerson);

  showPerson();

}

deletePerson = () => {

	console.log(person.pop());

	showPerson();
}


/*another example show, add, delete. */

const  computers = [
    { name: 'apple', ram: 24 },
    { name: 'compaq', ram: 4 },
    { name: 'acer', ram: 32}
];


 const showComputers = () => {
    
    if(computers.length < 0){
     
       console.log('no computers')
    	
    }else {

    	computers.forEach(computer => {

    		console.log(computer.name);
    		console.log(computer.ram);
    	})
    }
 }

 //1) identify how many parameters are needed in the function expression
const addComputer = (name, ram) => {
	//a) all parameters have been given a corresponding argument
       if(typeof name !== "undefined" && typeof ram !== "undefined"){
       	//b) passed in arguments are of the correct data type
       	if(typeof name === "string" && typeof ram === "number"){

			//c) check that the computers array is NOT empty
			if(computers.length > 0){

				//-if it is NOT, check for duplicates
				// check for duplicates
				let compDup = computers.some(computer => {
					return computer.name === name
				})
				// boolean true || false
				if(hasDuplicate){
					//*if duplicate found, say so in a console.log() notification
					console.log('computer already exist')
				}else{
					console.log('computer do not exist')

					// add to movie list

					let computer ={
						name,
						ram
					}
					computers.push(computer);
				}

			}else {
				//-if it is, you can straight away push your new movie object
				// push the computers in computer

				let computer = {
					name,
					ram
				}
				comuters.push(computer);
			}


       	}else{
       		console.log('name must be string and ram must be number')
       	}

       }else{
       	console.log('computer need two arguments')
       }
}
 








