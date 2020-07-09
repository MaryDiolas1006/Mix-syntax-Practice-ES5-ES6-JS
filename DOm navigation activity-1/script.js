/*
 Create a function called addTask that will run and add a new list item
 every time the button add task is click
 The value of text on the input must be added as a new list item

 Stretch Goal:

 -set a class attribute, pending, to every last child of the list
 each list item with class pending must have a font colored green.

 -do not allow empty strings to be passed.
 -the input must be cleared after the task has been added.
*/



let input = document.getElementById('input')
console.log(input.value)
let button = document.getElementById('button')

const addTask = () => {

let newTask = document.getElementById('newTask')

//copied clear added string
if(input.value !== ""){

 const list = document.createElement('li')
  
     list.textContent = input.value

   newTask.appendChild(list).style.color = 'green'
   input.value = ""

    //the very shortest way
   // taskList.innerHTML += `<li>${input.value}</li>`

  }else {

  	console.log('Please input a valid task')
  } 


}


button.addEventListener('click', addTask)









