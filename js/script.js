{
  let tasks = [];
  let hideDoneTasks = false;

  const removeTask = (taskIndex) => {
    tasks = tasks.filter((_, index) => index !== taskIndex);
    render();
  };

  function toggleDoneTasks(taskIndex) {
    tasks = [
      ...tasks.slice(0, taskIndex),
      {
        ...tasks[taskIndex],
        done: !tasks[taskIndex].done,
      },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  }

  const addNewTask = (newTaskContent) => {
    tasks = [...tasks, { content: newTaskContent }];
    render();
  };

  const markAllTaskDone = () => {
    tasks = tasks.map((task) => ({
      ...task,
      done: true,
    }));
  };

  const toggleHideDoneTask = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
  };

  const bindEvents = () => {
    const doneButton = document.querySelectorAll(".js__mark");

    doneButton.forEach((doneButton, index) => {
      doneButton.addEventListener("click", () => {
        toggleDoneTasks(index);
      });
    });

    const removeButton = document.querySelectorAll(".js__remove");

    removeButton.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };
  const renderTasks = () => {
    const taskToHTML = (task) => `
    <li class="js__list">
      <button class="js__mark ${task.done ? "js__mark--done" : ""}">${task.done ? "✓" : ""}</button> 
      <span class="js__listItem ${task.done ? "js__listItem--done" : ""}">${task.content}</span>
      <button class="js__remove">🗑</button>
    </li>
  `;

    const tasksElement = document.querySelector(".js__list");
    tasksElement.innerHTML = tasks.map(taskToHTML).join("");
  };
  const renderButtons = () => {};
  const bindButtonsEvents = () => {};

  const render = () => {
    renderTasks();
    renderButtons();
    bindEvents();
    bindButtonsEvents();
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
