const task = document.getElementById("task");
const add = document.getElementById("add");
const deleteAll = document.getElementById("delete-all");
const listItems = document.getElementById("list-items");
let todoList = [];

add.onclick = function addTask() {
  todoList.push(task.value);
  const taskElement = `<div class="task-element"><span>${task.value}</span><input type="checkbox" /><button></button></div>`;
  listItems.insertAdjacentHTML("beforeend", taskElement);
};
