{
  const tasks = [
    {
      content: "test-",
      done: false,
    },
    {
      content: "test+",
      done: true,
    },
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const doneTask = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);

    render();
  };

  const bindEvents = () => {
    const doneButton = document.querySelectorAll(".js__done");

    doneButton.forEach((doneButton, index) => {
      doneButton.addEventListener("click", () => {
        doneTask(index);
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
        <li
        ${task.done ? ' style="text-decoration: line-through"' : ""}
        >
        <button class="js__done">zrobione?</button> 
        <button class="js__remove">usuń</button>
        ${task.content}
        </li>
      `;
    }

    document.querySelector(".js__tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js__newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();
    const form = document.querySelector(".js__form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
