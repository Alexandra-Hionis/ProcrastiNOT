// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const newTodoModalBtn = document.getElementById("todo-modal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Get add/submit new todo button
const submitTodoBtn = document.getElementById("submit-todo-button");

// When the user clicks on the button, open the modal
newTodoModalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// When the user clicks on the button, close the modal
submitTodoBtn.onclick = function () {
  modal.style.display = "none";
};
