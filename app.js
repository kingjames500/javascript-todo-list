
const addButton = document.getElementById('add-task');

const taskInput = document.getElementById('input-tasks');

const taskList = document.getElementById('task-lists');


// let's load the task from local storage
loadTasksFromLocalStorage();

// let's create a function to add a task

function addTask(){
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }
    else{

        createTaskElement(task);

        saveTaskToLocal();

        taskInput.value = '';
    }
}

//let's create a function to create the task

function createTaskElement(task){
    const listItem = document.createElement('li');

    listItem.textContent = task;

    taskList.appendChild(listItem); 
}

//function for saving task onto local storage

function saveTaskToLocal(){
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function( item){
        tasks.push(item.textContent.trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//function for loading task from local storage so that even if the page is refreshed the task will still be there 

function loadTasksFromLocalStorage(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
}

//clicking the button so that it can add task

addButton.addEventListener('click', addTask);