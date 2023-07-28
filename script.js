function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const tasksContainer = document.createElement('div');
    tasksContainer.className = 'task';

    const taskNumber = document.createElement('span');
    taskNumber.textContent = document.querySelectorAll('.task').length + 1 + '. ';
    tasksContainer.appendChild(taskNumber);

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    tasksContainer.appendChild(taskContent);

    const taskContainer = document.querySelector('.task-container');
    taskContainer.appendChild(tasksContainer); // Append the task container to the task-container div

    taskInput.value = '';
  }
}
