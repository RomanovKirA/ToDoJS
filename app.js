// Массив тудушек
let todoItems = [];


function renderTodo(todo) {
  // Выбираем div с классом js-todo-list в котором хранятся тудушки
  const list = document.querySelector('.js-todo-list');

  // Проверяем, выполненная ли тудушка пришла в аргументе (читай про тернарные операторы)
  const isChecked = todo.checked ? 'done': '';
  
  // Создаем новый див внутри родителя, который будет хранить тудушку
  const node = document.createElement("div");
  
  // Указываем класс для нового дива
  node.setAttribute('class', `todo-item`);

  // Устанавливаем id для дива
  node.setAttribute('id', todo.id);

  // Верстаем контент для дива
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.title}</span>
    <button class="delete-todo js-delete-todo">
    <img class="icon" src="./images/full-trash-svgrepo-com.svg" alt="" />
    </button>
  `;

  // Добавляем наш див в общий список тудушек
  list.append(node);
}

// Функция добавляет объект todo в массив todoItems
function addTodo(todoText) {
  const todo = {
    title: todoText,
    checked: false,
    id: Date.now()
  };

  todoItems.push(todo);
  renderTodo(todo)
  console.log(todoItems);
}

// В HTML div стал form, у button появился тип submit
const form = document.querySelector('#todo-form');

// Когда происходит клик по button type submit или нажатие на enter, в форме происходит событие submit, которое мы отслеживаем тут
form.addEventListener('submit', event => {
  // Предотвращение стандартного поведения, чтобы не перезагружалась страница
  event.preventDefault();
  
  // Берем инпут, чтобы подтянуть из него значение в переменную text
  const input = document.querySelector('.todo-container__todo-name');

  // Функция trim() убирает лишние пробелы если они есть, чтобы не было двойных пробелов/кучи пробелов вначале/кучи пробелов в конце
  const text = input.value.trim();

  // Если значение инпута не пустое, вызываем функцию addTodo и передаем туда аргументом текст из инпута
  if (text) {
    addTodo(text);
  }
});
