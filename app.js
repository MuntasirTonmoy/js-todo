//* SELECTORS
const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector(".todo-list");

//* FUNTIONS
const addTodo = (event) => {
  event.preventDefault();
  const todoInputValue = todoForm.elements["todo-input"].value;
  if (!todoInputValue) {
    alert("⚠ please add a task");
    return;
  }
  todoForm.reset();
  const todoList = document.querySelector(".todo-list");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoContentDiv = document.createElement("div");
  todoContentDiv.classList.add("todo-content");

  const todoTextInput = document.createElement("input");
  todoTextInput.type = "text";
  todoTextInput.classList.add("todo-text");
  todoTextInput.setAttribute("readonly", "readonly");
  todoTextInput.value = todoInputValue;

  const todoActionsDiv = document.createElement("div");
  todoActionsDiv.classList.add("todo-actions");

  const editButton = document.createElement("button");
  editButton.classList.add("edit-todo");
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-todo");

  todoContentDiv.append(todoTextInput);
  todoActionsDiv.append(editButton, deleteButton);
  todoDiv.append(todoContentDiv, todoActionsDiv);
  todoList.append(todoDiv);

  editButton.addEventListener("click", () => {
    todoTextInput.toggleAttribute("readonly");
    if (!todoTextInput.hasAttribute("readonly")) {
      todoTextInput.focus();
      editButton.textContent = "Save";
    } else {
      editButton.textContent = "Edit";
    }
  });

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(todoDiv);
  });
};

//* EVENT LISTENERS
todoForm.addEventListener("submit", addTodo);
