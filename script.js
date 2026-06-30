function handleBegin() {
  alert("🚀 Begin Day 1");
}

function showDate() {
  const dateElement = document.getElementById("today-date");
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = today.toLocaleDateString("en-US", options);
}

showDate();

let tasks = [];

function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  tasks.push({ text: taskText, completed: false });
  input.value = "";

  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) {
      li.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onclick = function () {
      toggleTask(index);
    };

    const span = document.createElement("span");
    span.textContent = task.text;

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
  });

  updateProgress();
}

function updateProgress() {
  const progressText = document.getElementById("progress-text");
  const completedCount = tasks.filter(task => task.completed).length;
  progressText.textContent = completedCount + " out of " + tasks.length + " tasks completed.";
}