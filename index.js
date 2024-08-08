const prompt = require('prompt-sync')()
let tasks = []

// FUNCTION DEFINITIONS

// Write a function called addTask that takes in task as a parameter 
// The function should add the task to the end of the tasks array (push()) and console.log task + " added"
function addTask(task) {
  tasks.push(task)
  console.log(task + " added")
}

// Write a function called printTasks (no parameters) that console logs the tasks array
function printTasks() {
  console.log(tasks)
}

// Write a function called firstTask (no parameters) that returns the first element of the tasks array
function firstTask() {
  return tasks[0]
}

// Write a function called completeFirst (no parameters) that removes the first element (shift()) of the tasks array
function completeFirst() {
  if (tasks.length > 0) {
    const completedTask = tasks.shift()
    console.log(completedTask + " completed")
  } else {
    console.log("No tasks to complete")
  }
}

// FUNCTION CALLS
while (true) {
  console.log("Current tasks")
  // Call printTasks
  printTasks()

  // Prompt the user on what they want to do
  const userInput = prompt("What do you want to do? ")

  // If the user says "add task", prompt the user on their task 
  // and call addTask with their task
  if (userInput.toLowerCase() === "add task") {
    const newTask = prompt("Enter task: ")
    addTask(newTask)
  } else if (userInput.toLowerCase() === "first task") {
    // Else if user says "first task", call firstTask 
    // and console log the return value
    const first = firstTask()
    console.log("First task: " + first)
  } else if (userInput.toLowerCase() === "complete first") {
    // Else if user says "complete first", call completeFirst
    completeFirst()
  } else {
    // Else, says "I don't know how to do that! Try again."
    console.log("I don't know how to do that! Try again.")
  }
}