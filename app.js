let todoItems = [];

function renderTodo(todo) {
  const list = document.querySelector(".js-todo-list");

  const isChecked = todo.checked ? "done" : "";

  const htmlItem = document.createElement("div");

  htmlItem.setAttribute("class", `todo-item`);

  htmlItem.setAttribute("id", todo.id);

  htmlItem.innerHTML = `
    <input class="" id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span class='item-text'>${todo.title}</span>
    <button class="delete-todo js-delete-todo icon-btn">
    <img class="icon" src="./images/full-trash-svgrepo-com.svg" alt="" />
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
  console.log(todoItems);
}

const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector(".todo-container__todo-name");

  const text = input.value.trim();

  if (text) {
    addTodo(text);
  }

  input.value = "";
});