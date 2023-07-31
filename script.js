function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  const menuIcon = document.getElementById('menuIcon');
  const menuOptions = document.getElementById('menuOptions');

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
    taskContainer.appendChild(tasksContainer); 

    taskInput.value = '';
  }

  
}


menuIcon.addEventListener('click', () => {
  console.log("hello");
  
  if (menuOptions.style.display === 'none') {
    menuOptions.style.display = 'block';
  } else {
    menuOptions.style.display = 'none';
  }
});