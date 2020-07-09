/*DOM (Document Object Model) - representation
of an HTML  */


const body = document.body;
console.log(body);
//check the type of the body variable
console.log(typeof body)//object

console.log(body.nodeType)//returns1

/*
 all nodes have a numerical value to signify their type.

 1- element
 2- attribute
 3- text
*/

console.log(body.nodeName)
/*
  returns
  BODY and this corresponds to the element
  document.body is part of a list of "legacy"
  dom shortcut methods
*/


/*
  GETTING ELEMENTS BY THEIR IDs

*/

const pageTitle = document.getElementById("title")
console.log(pageTitle)
console.log(typeof pageTitle)

//get element by id

const bat = document.getElementById("bats");
console.log(bat);
console.log(typeof bat)


/*
 GETTING ELEMENTS BY THEIR CLASS NAME
*/

const heroes = document.getElementsByClassName("hero")

console.log(heroes)
console.log(heroes[1])


/*
  GETTING ELEMENTS BY RHEIR TAG NAME
*/

const listItems = document.getElementsByTagName("li")
console.log(listItems);



/*
 Query Selectors
 use CSS notation to find the necessary elements
 querySelector() - return the first element that matches the argument 
*/

const hero2 = document.querySelector(".hero")
console.log(hero2);

const bruce = document.querySelector("#bats")
console.log(bruce)


/*
  querySelectorAll()
  return ALL the elements that match the argument
*/

const heroesList = document.querySelectorAll(".hero")
console.log(heroesList)

/*
 querySelector and qSA use CSS notation
*/
//this will find the last child
const wonderWoman = document.querySelector("li:last-child")
console.log(wonderWoman);

/*
 querySelector can work on ANY element
*/

const roster = document.querySelector('ul#roster')
console.log(roster)
const bats = roster.querySelector('li#bats')
console.log(bats)


/*
ADDING ELEMENTS

the document object has a createElement method that 
takes a tag as an argument

*/

// 1. create the element
const flash = document.createElement('li')
console.log(flash)

// 2. add content by adding a text node
const flashText = document.createTextNode('Flash')
console.log(flashText);

/*Currently the element and textnode are both floating
3. Append the fashText node to the flash element using appendChild()
*/

flash.appendChild(flashText);    //append is for aading an element at the end 
                                 //prepend is for adding an element at the beginning
console.log(flash)

//the shortest way and less code for adding elements
const aquaman = document.createElement('li')
aquaman.textContent = 'Aquaman'

console.log(aquaman)


roster.appendChild(flash)
roster.appendChild(aquaman)


/*
  mini-activity

  create a function which will add a new list to the roster
*/

const newList = (newName) => {
// const roster = document.querySelector('ul#roster')
// console.log(roster)

 const newItem = document.createElement('li')
newItem.textContent = newName

// console.log(newItem)
roster.appendChild(newItem) //use append child to add new element inside the ul
}

newList('cyborg')


//change the content of the elements:

const heading = document.getElementById("title")
const origText = heading.firstChild// Justice League
console.log(origText)
const newText = document.createTextNode('Justice Society of America')
console.log(newText);

//.replaceChild(newC, oC)
heading.replaceChild(newText, origText)

/*
  innerHTML - property that returns all the child elements as a string
*/

console.log(heading.innerHTML)

heading.innerHTML = "<em>The Not Avengers</em>"
console.log(bats)

bats.innerHTML = "<a href=#> Is actually Bruce Wayne </a>"


//Updating CSS

heading.style.color = "teal"

//mini- exercise

//Change superman color to blue
const superman = document.querySelector("li:first-child")
superman.style.color = "blue"

//background red
flash.style.background = "red"

//border blue
aquaman.style.border = "2px solid blue"

// superman.style.display = 'none'

/*
  ADD CLASSES

  classList property containes all the classes that an element has
*/

const cyborg = roster.querySelector('li:last-child');
console.log(cyborg)
console.log(cyborg.classList)
cyborg.classList.add('highlighted');

/*
  The better practice is NOT to manipulate the style directly
  But rather to create classes andd add/remove them as necessary
  Simply style the classes using the external CSS file
*/


/*
  onclick event

  Execute a function when an element is clicked
  element.onclick = function(){}
*/

superman.onclick = function(){
	superman.style.fontSize = "40px"
}


const changeBG = () => {

	roster.style.background = "violet"
}


heading.onclick = function(){

	changeBG()
}


// mini-activity
//when I click wonderwoman, the font size should increase to 20px


wonderWoman.onclick = function (){

	wonderWoman.style.fontSize = '20px'
}



