document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  form.onsubmit = function(e) {
    e.preventDefault();

    const input = form.elements["new-task-description"];

    createTask(input.value);
  }
});

function createTask(text) {
  const tasksList = document.querySelector("#tasks");
  const idTask = tasksList.childElementCount;
  
  const task = document.createElement("li");
  task.innerText = text;
  task.setAttribute("id", idTask);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";

  deleteBtn.addEventListener("click", () => deleteTask(idTask));

  task.appendChild(deleteBtn);
  tasksList.appendChild(task);
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}