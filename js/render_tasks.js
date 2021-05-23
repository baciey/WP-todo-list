import editTask from './edit_task.js';
import removeTask from './remove_task.js';
import handleCheckbox from './handle_checkbox.js';
import updateStorage from './update_storage.js';

function renderTasks(tasks) {
    const tasksContainer = document.querySelector('.todo-list__tasks-container');
    tasksContainer.innerHTML = '';
    updateStorage(tasks);

    tasks.forEach((task, index) => {

        //SINGLE TASK CONTAINER
        const singleTask = document.createElement('div');
        singleTask.classList.add('todo-list__single-task');
        singleTask.id = index;
        if (task.isDone) singleTask.classList.add('todo-list__single-task--done');

        // LEFT COL
        const leftCol = document.createElement('div');
        const editTaskButtonContainer = document.createElement('div');
        const editTaskButton = document.createElement('button');
        const taskName = document.createElement('span');

        leftCol.classList.add('todo-list__left-col');
        editTaskButton.addEventListener('click', (e) => editTask(e, tasks));
        editTaskButton.title = 'edit';
        editTaskButton.classList.add('todo-list__edit-task-button', 'todo-list__button');
        editTaskButtonContainer.classList.add('todo-list__edit-task-button-container');
        editTaskButtonContainer.appendChild(editTaskButton);
        taskName.classList.add('todo-list__task-name');
        taskName.textContent = task.name;

        // RIGHT COL
        const rightCol = document.createElement('div');
        const checkbox = document.createElement('input');
        const removeTaskButton = document.createElement('button');

        rightCol.classList.add('todo-list__right-col');
        checkbox.addEventListener('change', (e) => handleCheckbox(e, tasks));
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-list__checkbox');

        if (task.isDone) checkbox.checked = true;
        removeTaskButton.addEventListener('click', (e) => removeTask(e, tasks));
        removeTaskButton.classList.add('todo-list__remove-task-button', 'todo-list__button');
        removeTaskButton.title = 'remove task'

        //APPEND
        rightCol.appendChild(checkbox);
        rightCol.appendChild(removeTaskButton);
        leftCol.appendChild(editTaskButtonContainer);
        leftCol.appendChild(taskName);
        singleTask.appendChild(leftCol);
        singleTask.appendChild(rightCol);
        tasksContainer.appendChild(singleTask);
    })
}

export default renderTasks;