document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  let formInput = document.querySelector('#new-task-description');
  let taskList = document.querySelector('#tasks');
  let priorityInput = document.querySelector("#priority");
  let datePicker = document.querySelector("#date");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addToDo(formInput.value, priorityInput.value, datePicker.value);
    event.target.reset();
  });

  function addToDo(todo, priority, date) {
    let li = document.createElement("li");
    li.textContent = `${todo}  ${date}  `;
    let button = document.createElement("button");
    button.addEventListener("click", deleteTask);
    button.textContent = "Delete";
    li.appendChild(button);
    taskList.appendChild(li);

    // Tasks Priorities
    if (priority === "high") {
      li.style.color = "green";
    } else if (priority === "medium") {
      li.style.color = "orange";
    } else {
      li.style.color = "red";
    }
  }

  function deleteTask(e) {
    e.target.parentNode.remove();
  }
});

