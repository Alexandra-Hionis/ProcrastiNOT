// Get new todo value
let form = document.getElementById("form");
let input = document.getElementById("todo-input");
const todoSubmitBtn = document.getElementById("submit-todo-button");
const noTodos = document.getElementById("no-todos");
const feedbackMessage = document.getElementById("feedback-message");

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
    // Call addTodo only if the input is not empty
    addTodo();
  }
  console.log(input.value);
});

function addTodo() {
  // Get the input value
  const inputValue = input.value.trim();

  // Check if input value is not empty
  if (inputValue !== "") {
    // Create a new todo item container div
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    // Create the HTML for todo item with edit and delete buttons
    todoItem.innerHTML = `
      <span>${inputValue}</span>
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    `;

    // Get the container where todos will be added
    const todosContainer = document.querySelector(".todos-container");

    // Append the new todo item to the todos container
    todosContainer.appendChild(todoItem);

    // Clear the input field after adding the todo
    input.value = "";

    // Hide noTodos if there are todos
    noTodos.style.display = "none";
  }
}
