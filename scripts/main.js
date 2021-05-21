function updateCounters() {
    const todo = document.querySelectorAll("li.itemTodo");
    console.log(todo);
    const completed = document.querySelectorAll("li.itemCompleted");
    console.log(completed);
    const total = todo.length + completed.length;
    console.log(total);

    document.getElementById("todo-count").innerHTML = todo.length;
    document.getElementById("completed-count").innerHTML = completed.length;
    document.getElementById("total-count").innerHTML = total;
  }
  
  updateCounters();