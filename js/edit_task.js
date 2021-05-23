import handleInput from './handle_input.js';
import saveTaskName from './save_task_name.js';

function editTask(e, tasks) {
    const editContainer = document.createElement('div');
    const input = document.createElement('input');
    const saveButton = document.createElement('button');

    input.placeholder = 'task name';
    input.classList.add('todo-list__new-task-name-input');
    input.addEventListener('focus', (e) => handleInput(e, saveTaskName, tasks));

    saveButton.addEventListener('click', (e) => saveTaskName(e, tasks, editButton));
    saveButton.classList.add('todo-list__save-new-task-name-button');
    saveButton.title = "save"

    editContainer.classList.add('todo-list__edit-container');
    editContainer.appendChild(input);
    editContainer.appendChild(saveButton);

    const editButton = e.target;
    editButton.parentNode.appendChild(editContainer);
    editButton.style.display = 'none';
}

export default editTask;