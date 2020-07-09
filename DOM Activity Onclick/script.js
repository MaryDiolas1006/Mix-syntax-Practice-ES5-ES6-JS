/*
  Instruction

  create onclick events wherein a colored circle is clicked,
  the appropriate box will be colored by the color of the circle

  create an onclick event wherein when the circle colored violet
  is clicked all boxes are colored violet.
*/


const red = document.getElementById("red");
console.log(red);

const redBox = document.getElementById("red-box")
console.log(redBox)

red.onclick = function(){
	redBox.style.background = 'red'
}


const orange = document.getElementById("orange");
console.log(orange);

const orangeBox = document.getElementById("orange-box")
console.log(orangeBox)

orange.onclick = function(){
	orangeBox.style.background = 'orange'
}


const yellow = document.getElementById("yellow");
console.log(yellow);

const yellowBox = document.getElementById("yellow-box")
console.log(yellowBox)

yellow.onclick = function(){
	yellowBox.style.background = 'yellow'
}



const green = document.getElementById("green");
console.log(green);

const greenBox = document.getElementById("green-box")
console.log(greenBox)

green.onclick = function(){
	greenBox.style.background = 'green'
}


const blue = document.getElementById("blue");
console.log(blue);

const blueBox = document.getElementById("blue-box")
console.log(blueBox)

blue.onclick = function(){
	blueBox.style.background = 'blue'
}


const indigo = document.getElementById("indigo");
console.log(indigo);

const indigoBox = document.getElementById("indigo-box")
console.log(indigoBox)

indigo.onclick = function(){
	indigoBox.style.background = 'indigo'
}


const violet = document.getElementById("violet");
console.log(violet);

const violetBox = document.getElementById("violet-box")
console.log(violetBox)

violet.onclick = function(){
	violetBox.style.background = 'violet'
}



//Another Solution

document.getElementById('red').onclick = function(){
	document.getElementById('red-box').style.backgroundColor='red'
}

document.getElementById('orange').onclick = function(){
	document.getElementById('orange-box').style.backgroundColor='orange'
}


document.getElementById('yellow').onclick = () => {

	document.getElementById('yellow-box').style.backgroundColor = 'yellow'
}


document.getElementById('green').onclick = () => {

	document.getElementById('green-box').style.backgroundColor = 'green'
}

document.getElementById('blue').onclick = () => {

	document.getElementById('blue-box').style.backgroundColor = 'blue'
}

document.getElementById('indigo').onclick = () => {

   document.getElementById('indigo-box').style.backgroundColor = 'indigo'
}

document.getElementById('violet').onclick = () => {

	document.getElementById('violet-box').style.backgroundColor = 'violet'
}



