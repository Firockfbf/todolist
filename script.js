let tasks = [];
let filter = "all";
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const filterBtn = document.getElementById("filter-btn");

function addTask(name) {
  tasks.push({ name, status: "todo" });
  renderTasks();
}

function toggleTaskStatus(index) {
  tasks[index].status = tasks[index].status === "todo" ? "done" : "todo";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.filter(task => filter === "all" || task.status === filter).forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `list-group-item task-item ${task.status}`;
    li.innerHTML = `<span>${task.name}</span><button class="btn btn-sm btn-outline-secondary">Toggle</button>`;
    li.querySelector("button").onclick = () => toggleTaskStatus(index);
    taskList.appendChild(li);
  });
}

taskForm.onsubmit = function(event) {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
};

filterBtn.onclick = function() {
  filter = filter === "all" ? "todo" : filter === "todo" ? "done" : "all";
  filterBtn.textContent = `Filtrer: ${filter === "all" ? "Tout" : filter === "todo" ? "À faire" : "Terminées"}`;
  renderTasks();
};

renderTasks();
