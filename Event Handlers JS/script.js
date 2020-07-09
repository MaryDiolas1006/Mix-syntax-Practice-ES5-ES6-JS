//Let's declare a name function that we will reference on an event Listener

// function doSomething(){
// 	console.log()

// 	console.log('Something Happened')
// }


// addEventListener('click', doSomething)


/*Events

  Event Link webpages to user interactions.
  Every user interaction trigger an event which script detects and responds to


   In order to detect events the addEventListener method is used to
   detects specific event for the element.


   There are other events not just click that occur in our page

   examples like:

   a keypress
   a mousehover
*/


/* Event Object

whenever an event handler/listener is triggered by an event, the callback function
is called. This function automatically passes an event object as parameter
that contans information about the event.

*/


// function doSomething(e) {
// 	console.log(e.type)

	
// }

// addEventListener('click', doSomething)


/*Event Target

  Besides the type property, the event object also has a target property
  this property returns a reference to the node that find the event
  it essentislly tells us where the event came from
*/

//this function is apply anywhere you click in the page
// function doSomething(e){

// 	console.log(e.target)
// }


// addEventListener('click', doSomething)



//only target will appear
// buttonFire = (e) => {

// 	console.log(e.target)
// }

// let btnFire = document.querySelector('#fire')

// btnFire.addEventListener('click', buttonFire)


// EVENTS TYPES

/*
   Mouse Events
*/

const clickParagraph = document.getElementById('click')

clickParagraph.addEventListener('click', () => {

  console.log('click')
})


clickParagraph.addEventListener('mousedown', () => {

  console.log('down')
})

clickParagraph.addEventListener('mouseup', () => {

  console.log('up')
})
// The above event handlers will output in the order down>up>click


/*
  Mini activity

  Change text of p to I've been clicked after being clicked
*/

  clickParagraph.addEventListener('click', () => {
  clickParagraph.textContent = "I've been clicked"
  console.log(clickParagraph)
})

//other solution

clickParagraph.addEventListener('click', (e) => {

  e.target.innerHTML = "I've been clicked"
})


// DOUBLE click
/*
  Let's save our targeted element as a constant
*/

const dblClickParagraph = document.getElementById('dblclick')

highlight = (e) => {

  e.target.classList.toggle('highlight')
}

dblClickParagraph.addEventListener('dblclick', highlight)
clickParagraph.addEventListener('click', highlight)

/*
  dblclick requires a double click to fire. It will not work,
  if only a single click was done.
*/


//MOUSEOVER
/*
  the mouseover event occurs when the mouse pointer hovers 
  over the target element. The mouseout event occurs when the 
  pointer moves away from the target element.
*/

const hoverParagraph = document.getElementById('hover')

hoverParagraph.addEventListener('mouseover', highlight)
hoverParagraph.addEventListener('mouseout', highlight)

/*
  mini-activity

  

  Change the text of p with id=hover to the Champ
  is Here when the mouse is over the p element and to Austin 
  3:16 when the mouse is out of the p element
*/

hoverParagraph.addEventListener('mouseover', (e) => {

  e.target.innerHTML = "The Champ is Here"
})

hoverParagraph.addEventListener('mouseout', (e) => {

  e.target.innerHTML = "Austin 3:16"
})


//KEYBOARD EVENTS

/*
  Whenever a user presses a key, 3 events occur in the following
  order: 
  Keydown - occurs when a key is pressed and will continue to occurs
          if the key is held down
  keypress - occurs only for keys that produce characters
  plus the del key // this only works on firefox

  keyup - occurs when a key is released
*/
// keydown
// addEventListener('keydown', highlight)

//keypress
// addEventListener('keypress', highlight)

//keyup
addEventListener('keyup', () => {

  console.log('You stopped pressing key')
})

let input = document.querySelector('#newItem')

input.addEventListener('keyup', e => {

  console.log(e.target.value)
})


addEventListener('keyup', e => {

  console.log(e.key);

/*
 mini activity create an if-else statement that if the arrow 
 right key is pressed, the text of the h1 heading will
 change to right
 likewise if the arrow left is pressed, the text of the 
 h1 will change to left
*/

let heading = document.querySelector('#listHeading')

if(e.key === "ArrowRight"){

  heading.textContent = "RIGHT"
}else if(e.key === "ArrowLeft"){

  heading.textContent = "LEFT"
}


//other solution
if(e.key === "ArrowRight"){

  document.querySelector('#listHeading').innerHTML = "RIGHT"
  
}else if(e.key === "ArrowLeft"){

  document.querySelector('#listHeading').innerHTML = "LEFT"
}



});


input.addEventListener('keyup', e => {

  console.log(e.target.value)

  let value = e.target.value
  document.querySelector('#listHeading').innerHTML = value

  if(value === "alert"){

    alert('Great Job')
  }
})


//REMOVING EVENTS LISTENERS

/*
  the removeEventListener() method removes previously assigned
  event listener to demonstrate, let's save our p element with
  an id once to a new variable
*/


const onceParagraph = document.getElementById('once')

remove = (e) => {
  console.log('Enjoy this while it lasts')
  onceParagraph.classList.toggle('pinkIt')

  onceParagraph.removeEventListener('click', remove)
}

onceParagraph.addEventListener('click', remove)
//now, the event only takes effect once


/*
  EVENT PROPAGATION

  When you click an element, you're actually clicking
  all the elements nested inside
*/

const ulElement = document.getElementById('list')
const firstItem = document.querySelector('#list li:first-child')

addEventListener('click', (e) => {
  console.log('click on the page')
})

ulElement.addEventListener('mouseover', e => {

  console.log('click on the UL')
  // ulElement.innerHTML += '<li>Yes</li>'
})

firstItem.addEventListener('click', (e) => {

  console.log('click on the first Item')
})

//Event Bubbling - the event fires on the target element first and 
//then bubbles upwards into the DOM tree. target element>parent>body
/*
  Event capturing goes the other way. It starts from the outermost
  to the innermost element. Add a boolean true as an optional third 
  argument in your event listener
*/
/*
  3 Phases to reach our target element.
  Event Capturing -> target elment -> event Bubbling
*/


/*
  Event Delegation

  attaching an event listener to a parent makes its children automatically
  inherit the event. This is called Event Delegation and it;s especially
  useful for adding event listeners to dynamically generated elements
*/


ulElement.addEventListener('click', highlight)



/*
 Mini Activity

 add items to our UL using the value from the input
 when the add button is clicked
*/


console.log(input.value)
let button = document.querySelector('#addBtn')
button.addEventListener('click', () => {

ulElement.innerHTML += `<li>${input.value}</li>`

})

