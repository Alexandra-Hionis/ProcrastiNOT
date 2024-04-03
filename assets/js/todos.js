// Get new todo value
let form = document.getElementById("form");
let input = document.getElementById("todo-input");
const todoSubmitBtn = document.getElementById("submit-todo-button");
const noTodos = document.getElementById("no-todos");
const feedbackMessage = document.getElementById("feedback-message");

// Initialize an empty array to store todo items
let todos = [];

// Validate the input field
function validateInputField() {
  if (input.value === "") {
    // Disable the todoSubmitBtn button
    todoSubmitBtn.disabled = true;
    // Update feedbackMessage innerText
    feedbackMessage.innerText = "Please enter a todo";
  } else {
    // Clear the feedback message
    feedbackMessage.innerText = "";
    // Enable the todoSubmitBtn button
    todoSubmitBtn.disabled = false;
  }
}

input.addEventListener("input", validateInputField);

todoSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateInputField();
  createTodo();
  saveTodoList();
});

function createTodo() {
  // Get the input value
  let inputValue = input.value.trim();

  // Check if input value is not empty
  if (inputValue !== "") {
    // Create a new todo item container div
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    // Create the HTML for todo item with edit and delete buttons
    todoItem.innerHTML = `
      <span>${inputValue}</span>
      <div class="button-options-container">
      <button class="button edit-button">Edit</button>
      <button class="button delete-button">Delete</button>
      </div>
    `;

    // Get the container where todos will be added
    const todosContainer = document.querySelector(".todos-container");

    // Append the new todo item to the todos container
    todosContainer.appendChild(todoItem);

    // Hide noTodos if there are todos
    noTodos.style.display = "none";

    // acceptData(inputValue);

    // Clear the input field after adding the todo
    input.value = "";
  }
}

function saveTodoList() {
  let todoItems = [];

  // Get all todo items
  const todoItemsElements = document.querySelectorAll(".todo-item");

  // Iterate over each todo item
  todoItemsElements.forEach((todoItemElement) => {
    let todoItemInfo = {
      task: todoItemElement.querySelector("span").innerText,
      // completed: false, // You may add logic here to check if todo is completed
    };

    // Push todo item info to array
    todoItems.push(todoItemInfo);
  });

  // Save todo items to local storage
  localStorage.setItem("todos", JSON.stringify(todoItems));
}
