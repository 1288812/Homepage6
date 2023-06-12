{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  function toggleDoneTask(taskIndex) {
    tasks[taskIndex].done = !tasks[taskIndex].done;

    render();
  }

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);

    render();
  };

  const bindEvents = () => {
    const doneButton = document.querySelectorAll(".js__mark");

    doneButton.forEach((doneButton, index) => {
      doneButton.addEventListener("click", () => {
        toggleDoneTask(index);
      });
    });

    const removeButton = document.querySelectorAll(".js__remove");

    removeButton.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="js__list">
        <button class="js__mark js__mark--done">${task.done ? "✓" : ""}
        </button> 
        <span class="js__listItem ${task.done ? "js__listItem--done" : ""}"> ${task.content} 
        </span>
        <button class="js__remove">🗑</button>
        </li>
      `;
    }

    document.querySelector(".js__tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = document.querySelector(".js__newTask");
    const newTaskContent = newTask.value.trim();
    newTask.focus();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
    newTask.value = "";
  };

  const init = () => {
    render();
    const form = document.querySelector(".js__form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
