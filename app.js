const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-title");
const todoList = document.querySelector("#js-todo-list");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const todoText = todoInput.value;
  const taskHtml = `<li class="todo-list__item">
        <span class="item__text">${todoText}</span>
        <button
          type="submit"
          id="edit-todo"
          class="icon-btn todo-container__btn-add"
        >
          <img class="icon" src="./images/edit-svgrepo-com (1).svg" alt="" />
        </button>
        <button class="icon-btn todo-container__btn-delete" id="delete-todo">
          <img class="icon" src="./images/eraser-clean-svgrepo-com.svg" alt="" />
        </button>
      </li>`;
  todoList.insertAdjacentHTML("afterbegin", taskHtml);
});
