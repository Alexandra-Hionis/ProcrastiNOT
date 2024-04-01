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

// Create a new todo item and add it to todos container
function addTodo() {
  // Create a new div element
  const newDiv = document.createElement("div");

  // Assign class name to the new div
  newDiv.className = "todo-item";

  // Create a text node with the input value
  const newContent = document.createTextNode(input.value);

  // Append the text node to the new div
  newDiv.appendChild(newContent);

  // Get the container where todos will be added
  const todosContainer = document.querySelector(".todos-container");

  // Append the new todo item to the todos container
  todosContainer.appendChild(newDiv);

  // Clear the input field after adding the todo
  input.value = "";

  // Hide noTodos if there are todos
  noTodos.style.display = "none";
}
