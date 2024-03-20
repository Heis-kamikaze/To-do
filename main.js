const addTask = document.getElementById("add-task");
const addTaskBtn = document.getElementById("add-task-btn");
const theTask = addTask.value
const addTheTask = document.createTextNode(theTask);


const displayTask = () => {
    let oneTask = document.createElement("li");
    oneTask.appendChild(addTheTask)
    let allTasks = document.getElementById("all-tasks");
    allTasks.appendChild(oneTask);
    addTask.value = " ";
    console.log(allTasks)
}

addTaskBtn.addEventListener('click', displayTask)
