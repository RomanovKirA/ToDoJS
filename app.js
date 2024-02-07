const list = document.querySelector(".js-todo-list");
const form = document.querySelector("#todo-form");
const deleteBtn = document.querySelector("#delete-all");
let todoItems = [];

function renderTodo(todo) {
  const list = document.querySelector(".js-todo-list");

  const isChecked = todo.checked ? "done" : "";

  const htmlItem = document.createElement("div");

  htmlItem.setAttribute("class", `todo-item`);

  htmlItem.setAttribute("id", todo.id);

  htmlItem.innerHTML = `
    <input class="" id="${todo.id}" type="checkbox"/>
    <span class='item-text'>${todo.title}</span>
    <button class="delete-todo js-delete-todo icon-btn" id="${todo.id}">
    <img class="icon icon-delete" src="./images/full-trash-svgrepo-com.svg" alt="" />
    </button>
  `;

  list.prepend(htmlItem);
}

function addTodo(todoText) {
  const todo = {
    title: todoText,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function deleteTodos(todos) {
  const list = document.querySelector(".js-todo-list");
  todos = [];
  list.innerHTML = ``;
}

function deleteTodo(key) {
  const items = document.querySelector(".js-todo-list").children;
  const todoToRemove = items.namedItem(key);
  const todoIndex = todoItems.findIndex((todo) => {
    return todo.id === Number(key);
  });
  todoItems.splice(todoIndex, 1);
  todoToRemove.remove();
}

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("icon-delete")) {
    const itemId = event.target.parentElement.id;
    deleteTodo(itemId);
  }
});

deleteBtn.addEventListener("click", () => {
  deleteTodos(todoItems);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector(".todo-container__todo-name");

  const text = input.value.trim();

  if (text) {
    addTodo(text);
  }

  input.value = "";
});

