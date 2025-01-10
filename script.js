document.getElementById("add-task-btn").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim() !== "") {
    const taskItem = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});
