// defining a constant variavle for input field
const input = document.getElementById("input");

// defining a constant variable for ul
const todoLists = document.getElementById("todo-lists");

function  addTodo(){
    //checking if our input is empty

    if (input.value === '') {
        alert("Please enter a task!");
    }
    else{
        //creating a list item
        let li = document.createElement("li");
        li.innerHTML = input.value;
        todoLists.appendChild(li);
    }

    //clearing the input field
    input.value = "";

}