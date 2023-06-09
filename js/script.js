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

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li
        ${task.done ? ' style="text-decoration: line-through"' : ""}
        > 
        <button class="js__remove" >usuń</button>
        ${task.content}
        </li>
      `;
    }

    document.querySelector(".js__tasks").innerHTML = htmlString;

    const removeButton = document.querySelectorAll(".js__remove");

    removeButton.forEach((removeButton, index) => {
      removeButton.addEventListener("click", removeTask);
    });
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
