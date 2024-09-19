
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

// function createTaskElement(task) {
//     const listItem = document.createElement('li');

//     const spanText = document.createElement('span');

//     listItem.textContent = task;

//     //create a delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'delete';
//     deleteButton.className = 'delete-btn';


//     //create mark as completed button
//     const completedButton = document.createElement('button');
//     completedButton.textContent = 'completed';
//     completedButton.className = 'mark-as-done';

//     //append the delete button to the list item
//     //append the delete button to the list item
//     //append the span text to the list item
//     listItem.appendChild(completedButton);
//     listItem.appendChild(deleteButton);
//     taskList.appendChild(listItem);


//     //add event listener to the delete button
//     deleteButton.addEventListener('click', function () {
//         taskList.removeChild(listItem);
//         saveTaskToLocal();
//     });    

//     //add event listener to the completed button so as the task to be crossed through with a line
//     completedButton.addEventListener('click', function () {
//         listItem.style.textDecoration = 'line-through';
//         listItem.style.color = 'green';
//     });
// }


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
    listItem.appendChild(spanText);   // Append the task text first
    listItem.appendChild(completedButton); // Append the "Completed" button
    listItem.appendChild(deleteButton);    // Append the "Delete" button

    // Append the list item to the task list (ensure taskList is defined in your script)
    taskList.appendChild(listItem);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
        // saveTaskToLocal();
    });

    // Add event listener to the completed button to mark the task as completed
    completedButton.addEventListener('click', function () {
        spanText.style.textDecoration = 'line-through';  // Cross through only the task text
        spanText.style.color = 'green';                  // Change the color of the task text
    });
}


//function for saving task onto local storage

function saveTaskToLocal() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function (item) {
        tasks.push(item.textContent.replace('delete', '').trim());
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