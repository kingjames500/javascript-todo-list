
const addButton = document.getElementById('add-task');

const taskInput = document.getElementById('input-tasks');

const taskList = document.getElementById('task-lists');


// let's load the task from local storage
loadTasksFromLocalStorage();

// let's create a function to add a task
function addTask() {
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }
    else {
        createTaskElement(task);
        saveTaskToLocal();
        taskInput.value = '';
    }
}

//let's create a function to create the task

function createTaskElement(task) {
    const listItem = document.createElement('li');

    // Create a span element to wrap the task text
    const spanText = document.createElement('span');
    spanText.textContent = task;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    // Create a mark as completed button
    const completedButton = document.createElement('button');
    completedButton.textContent = 'Completed';
    completedButton.className = 'mark-as-done';

    // Append the task text (span), completed button, and delete button to the list item
    listItem.appendChild(spanText);
    listItem.appendChild(completedButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => deleteTask(listItem));

    // Add event listener to the completed button to mark the task as completed
    completedButton.addEventListener('click', () => markAsDone(spanText));
}


//function for saving task onto local storage

function saveTaskToLocal() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function (item) {
        tasks.push(item.textContent.replace(/Delete|Completed/g, '').trim());
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//function for loading task from local storage so that even if the page is refreshed the task will still be there 
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
}

//clicking the button so that it can add task
addButton.addEventListener('click', addTask);

//function for handling delete tasks
function deleteTask(listItem) {
    taskList.removeChild(listItem);
    saveTaskToLocal();
}

//function for handling mark as completed tasks
function markAsDone(spanText) {
    spanText.style.textDecoration = 'line-through';
    spanText.style.color = 'green';
}