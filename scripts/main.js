function updateCounters() {
    const todo = document.querySelectorAll("li.itemTodo").length;
    const completed = document.querySelectorAll("li.itemCompleted").length;
    const total = todo + completed;

    document.getElementById("todo-count").innerHTML = todo;
    document.getElementById("completed-count").innerHTML = completed;
    document.getElementById("total-count").innerHTML = total;
}

updateCounters();
  
function toggleDone(event) {
    // get the checkbox from the event object
    const check = event.currentTarget;

    if (check.checked) {
        // change the checkbox so that it shows up as completed
        // the "completed" class is set on the parent element, the <li>
        check.parentElement.className = "itemCompleted";
    } else {
        // change the checkbox so that it shows up as todo
        check.parentElement.className = "itemTodo";
    }
    // update the counters, now that we have updated the checkbox
    updateCounters();
}

function createTodo(title) {
    // create a list item
    const listItem = document.createElement("li");
    listItem.className = "itemTodo";
  
    // create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = false;
    // add the "change" event listener to the checkbox
    checkbox.addEventListener("change", toggleDone);
    // and add the checkbox to the list item
    listItem.appendChild(checkbox);
  
    // create a text node with the given title
    // and append the text node to the list item
    const newContent = document.createTextNode(title);
    listItem.appendChild(newContent);
  
    // append the list item to the todo list
    const list = document.getElementById("itemList");
    list.appendChild(listItem);
}

function addNewTodo(event) {
    event.preventDefault();

    const inputField = document.querySelector("#new-todo");
    const newTodoTitle = inputField.value;
    createTodo(newTodoTitle);

    // reset the value of the inputField to make it empty and
    // ready to create new todos
    inputField.value = null;

    updateCounters();
};