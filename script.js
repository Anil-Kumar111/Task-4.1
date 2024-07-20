// Define task list array
let tasks = [];

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear existing tasks

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add('completed');
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? 'Undo' : 'Complete';
    completeButton.onclick = () => toggleTask(index);
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(index);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

// Function to toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial render
renderTasks();
