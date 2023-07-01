const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to create a new task
function createTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
    attachDeleteListener(listItem);
    attachToggleListener(listItem);
  }
}

// Function to delete a task
function deleteTask() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
}

// Function to toggle task completion
function toggleTask() {
  const listItem = this.parentNode;
  listItem.classList.toggle('done');
}

// Function to attach delete listener to a task
function attachDeleteListener(listItem) {
  const deleteButton = listItem.querySelector('.deleteButton');
  deleteButton.addEventListener('click', deleteTask);
}

// Function to attach toggle listener to a task
function attachToggleListener(listItem) {
  const checkbox = listItem.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', toggleTask);
}

// Attach event listener to the add button
addButton.addEventListener('click', createTask);
