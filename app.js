// forEach - пробежаться по всем элементам, чето сделать, ничего не вернуть
// array.forEach((element) => {element * 2}) // Умножить все элементы на 2

// find - пробежаться по всем элементам, найти первый удовлетворяющий условию
// array.find((element) => element.length === 5) // Найти элемент длинной 5

// map - пробежаться по всем элементам, применить функцию ко всем элем., вернуть
// новый массив
// const newArray = array.map((element) => {element / 2}) // Создать новый массив
// // все элементы которого поделены на 2 (array остается без изменений)

// filter - пробежаться по всем элементам, применить условие ко всем элементам,
// изменить массив к которому применяем
// array.filter((element) => {element / 2}) //Поделить в массиве все элементы на 2

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-title");
const todoList = document.querySelector("#js-todo-list");

let todoArray = [];

const deleteAllButton = document.querySelector("#delete-all");

const emptyTodoBlock = document.querySelector(".empty-list");

deleteAllButton.addEventListener("click", function () {
  todoList.innerHTML = "";
  todoArray = [];
  emptyTodoBlock.style.display = "flex";
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: todoInput.value.trim(),
    done: false,
  };
  renderTodo(newTodo)
});

todoList.addEventListener("click", changeStatus);

function renderTodo(todo) {
  
  const doneClass = todo.done ? "item__text item__text--done" : "item__text";
  if (todo.text) {
    const todoHtml = `<li id='${todo.id}' class="todo-list__item">
    <span class="${doneClass}">${todo.text}</span>
    <button
    type="button"
    id="done-todo"
    data-action="done"
    class="icon-btn todo-container__btn-add" 
    >
    <img class="icon" src="./images/checked-tick-svgrepo-com.svg" alt="" />
    </button>
    <button 
    type='button' 
    class="icon-btn todo-container__btn-delete" 
    id="delete-todo" 
    data-action="delete">
    <img class="icon" src="./images/eraser-clean-svgrepo-com.svg" alt="" />
    </button>
    </li>`;
    todoList.insertAdjacentHTML("afterbegin", todoHtml);
    todoInput.focus();
    todoArray.push(todo);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    todoInput.value = "";
  }
  if (todoList.children.length) {
    emptyTodoBlock.style.display = "none";
  }
}

function changeStatus(event) {
  if (event.target.id === "js-todo-list") return;
  const parentNode = event.target.closest(".todo-list__item");
  const id = +parentNode.id;
  if (event.target.dataset.action === "delete") {
    //const indexArray = todoArray.findIndex((todoArray) => todoArray.id === id)
    //todoArray.splice(indexArray, 1);
    todoArray = todoArray.filter((todo) => todo.id !== id);

    console.log(todoArray);
    parentNode.remove();
  }
  if (event.target.dataset.action === "done") {
    todoArray.forEach((todo) => {
      todo.id === id ? (todo.done = !todo.done) : "";
    });

    const todoTitle = parentNode.querySelector(".item__text");
    todoTitle.classList.toggle("item__text--done");
  }
  if (todoList.children.length === 0) {
    emptyTodoBlock.style.display = "flex";
  }
  console.log(todoArray);
}

(function init() {
  if (localStorage.getItem("todos")) {
    todoArray = JSON.parse(localStorage.getItem("todos"));
    todoArray.forEach((element)=>{renderTodo(element)})
  }
})();
