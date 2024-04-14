const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-title");
const todoList = document.querySelector("#js-todo-list");

const deleteAllButton = document.querySelector("#delete-all");

const emptyTodoBlock = document.querySelector(".empty-list");

deleteAllButton.addEventListener("click", function () {
  todoList.innerHTML = "";
  emptyTodoBlock.style.display = "flex";
});

todoForm.addEventListener("submit", renderTodo);

todoList.addEventListener("click", deleteTodo);

function renderTodo(event) {
  event.preventDefault();
  if (todoInput.value) {
    const todoValue = todoInput.value;
    const todoHtml = `<li class="todo-list__item">
    <span class="item__text">${todoValue}</span>
    <button
    type="button"
    id="done-todo"
    class="icon-btn todo-container__btn-add" 
    >
    <img class="icon" src="./images/checked-tick-svgrepo-com.svg" alt="" />
    </button>
    <button
    type="button"
    id="edit-todo"
    class="icon-btn todo-container__btn-add" 
    >
    <img class="icon" src="./images/edit-svgrepo-com (1).svg" alt="" />
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
  }
  todoInput.value = "";
  if (todoList.children.length) {
    emptyTodoBlock.style.display = "none";
  }
}

function deleteTodo(event) {
  if (event.target.dataset.action !== "delete") return;
  const parentNode = event.target.closest(".todo-list__item");
  parentNode.remove();
  if (todoList.children.length === 0) {
    emptyTodoBlock.style.display = "flex";
  }
}

let editTodo = document.querySelectorAll("#edit-todo");
let textTodo = document.querySelectorAll('.item__text')

for (let i = 0; i < editTodo.length; i++) {
  let editMode = false;

  editTodo[i].addEventListener("click", function () {
    if (editMode) {
      this.textContent = "Edit";
      text[i].removeAttribute("contentEditable");
    } else {
      this.textContent = "Ok";
      text[i].setAttribute("contentEditable", true);
      text[i].focus();
    }

    editMode = !editMode;
  });
}