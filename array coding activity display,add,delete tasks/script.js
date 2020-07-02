let tasks = ['eat', 'sleep', 'code'];


displayTasks = () => {

	for(let count = 0; count < tasks.length; count++) {

		console.log(`tasks ${count + 1}: ${tasks[count]}`)
	}
}


addTasks = (newTask) => {
      
      tasks.push(newTask);
	console.log(`Added new tasks ${newTask}`)
     
     displayTasks();
}


deleteTask = () => {

	console.log(`deleted tasks ${tasks.pop()}`)

	displayTasks();
}
























