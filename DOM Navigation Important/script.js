/*
 DOM Navigation

 node objects have a number of properties
 and methods for navigating the document tree

 the childNodes property is a list of all the nodes that are 
 children of the targeted node to illustrate, let's 
 check the child nodes of the element with an id attribute of roster:
*/

const heroes = document.getElementById('roster')
console.log(heroes.childNodes);
/*
  returns 7 nodes which inscludes any text nodes and therefore,
  even whitespaces because whitespaces are considered as 
  a text node. whitespaces are counted as empty text nodes in this nodeList
  includes everything from whitespaces to comments to elements
  that are children of the parent node
*/

console.log(heroes.children);
/*
 returns a collection of 3 nodes, all elements and no text nodes.
*/

console.log(heroes.firstChild);
//returns an empty text node- whitespace

console.log(heroes.lastChild)
/*
These examples illustrate how childNodes, firstChild, lastChild
properties can lead to confusing results.
Yu might have expected to get the first or last li element from
the examples. But instead gor an empty textnode due to a
whitespace character between the <ul> and <li> tags
*/

//using querySelctor, is using css selector notation
const wonderWoman = document.querySelector('ul#roster li:last-child')
console.log(wonderWoman)
/*
  parentNode property returns the parent node of an element
*/
 console.log(wonderWoman.parentNode)
 //returns its parent node = <ul> with id = 'roster'


 /*nextSibling
   nextsibling property returns the next adjacent node of the same
   parent. Returns null if the node is the last child of the parent.
 */
 console.log(wonderWoman.nextSibling);


 /*.previousSibling
   previousSibling returns the previous adjacent node of the same
   parent. Returns null if the node is the first of the parent
 */

 console.log(wonderWoman.previousSibling)
 /*nextSibling and previousSibling returns nodes not element.
 caution should be used in using these properties as they will often
 return blank text nodes as seen in the examples.
 */


 /*Finding the Value of a node
 */

 console.log(wonderWoman);
 /*returns a DOM node that contains the following HTML
 <li class="hero">Wonder Woman</li>
 */

 console.log(wonderWoman.firstChild);
 const text = wonderWoman.firstChild
 console.log(text)

 console.log(text.nodeName);//returns #text
 //nodeName property tells us the name of the node

 console.log(text.nodeType);//returns 3
 //nodeType property tells us the type of node

 console.log(text.nodeValue);
 //or
 console.log(wonderWoman.textContent)
 //returns Wonder Woman
 //nodeValue property shows the value of the node
  

console.log(wonderWoman.textContent)
wonderWoman.textContent = 'Gal'



//previousElementSibling
//returns the previous adjacent element node.
console.log(wonderWoman.previousElementSibling)
/*return the previous adjacent element node.
*/
const bats = wonderWoman.previousElementSibling
console.log(bats)
bats.innerHTML = 'Robert Pattinson'
console.log(bats.innerHTML)
console.log(bats.previousElementSibling)


//nextElementSibling
//returns the next adjacent element node
console.log(bats.nextElementSibling)


//Getting and Setting Attributes
/*All HTML elements have a large number of possible attributes
  the DOM has getter and setter methods to view, add, remove
  or modify the value of the attributes.

  Getting the Element's Attributes:
  getAttribute() method returns of the value of attribute
  passed as an argument.
*/


console.log(wonderWoman.getAttribute('class'));
//returns hero as the value of attribute class

console.log(wonderWoman.getAttribute('src'));
//returns null becuase the element doesn't contain 
//an attribute called src.


/*Setting an Element's Attributes

  the setAttribute() method changes the value of an element
  attributes. 
  syntax: element.setAttribute(att,val)
*/

wonderWoman.setAttribute('class', 'villain')
console.log(wonderWoman.getAttribute('class'))


wonderWoman.setAttribute('class', 'hero')

//set an id called amazon for wonderWoman
wonderWoman.setAttribute('id', 'amazon')
console.log(wonderWoman.getAttribute('id'))


/*Classes of an Element
  the className property lets us set the calss of an elements directly.
  it also lets us find out the value of the class attribute
*/

console.log(wonderWoman.className);

wonderWoman.className = 'villain'
console.log(wonderWoman.className) //returns villain
/*
  Caution - changing the className property of an element
  by assignment will overwrite all other classes that have been
  set on the element. To avoid this we use the classList property.
*/

console.log(wonderWoman.classList);
/*
 classList property is a list of all the classes that an element has.
 It has an add() method to add a class to an element without 
 overwriting any classes that it already has.
*/

wonderWoman.classList.add('goddess')
console.log(wonderWoman.classList)


/*
 remove() method removes a specific class name pass in as an argument
*/

wonderWoman.classList.remove('villain')
console.log(wonderWoman.classList) //retuns goddess


/*
  The toggle() method adds a class if the value/class name 
  passed in the argument does not exist yet but removes
  it if the element already has one.
*/

wonderWoman.classList.toggle('hero');
console.log(wonderWoman.classList);

//try to toggle the class hero off of wonderWoman
wonderWoman.classList.toggle('hero');
console.log(wonderWoman.classList);
//removes hero class again


/*
  the contains() method returns a boolean after it checks.
  if the passed argument is in the classList
*/

console.log(wonderWoman.classList.contains('hero'));//returns false
console.log(wonderWoman.classList.contains('goddess'));//returns true



/*addEventListener
  addEventListener allows to interact with our page
  runs a function when an event has been successfully made
  there amny kinds of events

  'click'

  syntax: element.addEventListener(event, function)
*/


let buttonBG = document.getElementById('bgChanger')

buttonBG.addEventListener('click', function() {

	let rosterList = document.querySelector('#roster')
	rosterList.classList.toggle('rosterBG')
});



//mini-activity

// create a button which toggles the hero class for wonder woman


let onSubmit = document.getElementById('onSubmit')

onSubmit.addEventListener('click', function() {

	let wonderWoman  = document.querySelector('ul#roster li:last-child')
	wonderWoman.classList.toggle('hero')
});



let input = document.getElementById('input')

let addHeroBtn = document.getElementById('addHero')

const addHero = () => {

   console.log(input.value);

   let roster = document.getElementById('roster')
    
    //adding element
   const tralalala  = document.createElement('li')
  
     tralalala.textContent = 'Tralalala'
       

     roster.appendChild(tralalala)

      //second li element added
      const maleficent  = document.createElement('li')
  
     maleficent.textContent = 'Maleficent'
      

     roster.appendChild(maleficent)

     //3rd li element added

      const noBeba  = document.createElement('li')
  
     noBeba.textContent = 'No Beba'
      

     roster.appendChild(noBeba)


     
}



addHeroBtn.addEventListener('click', addHero)

