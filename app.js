//* SELECTORS
const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector(".todo-list");

//* FUNTIONS
const addTodo = (event) => {
  event.preventDefault();
  const todoInputValue = todoForm.elements["todo-input"].value;
  if (!todoInputValue) {
    alert("⚠ please add a task");
  }
  todoForm.reset();
  const li = document.createElement("li");
  li.innerText = todoInputValue;
  todoList.appendChild(li);
};

//* EVENT LISTENERS
todoForm.addEventListener("submit", addTodo);
