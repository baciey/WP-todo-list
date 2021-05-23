import updateStorage from './update_storage.js';


function saveTaskName(e, tasks) {
    const editContainer = e.target.parentNode;
    const input = editContainer.querySelector('.todo-list__new-task-name-input');
    const parent = e.target.closest('.todo-list__single-task');
    const taskName = parent.querySelector('.todo-list__task-name');
    const index = parent.id;
    tasks[index].name = input.value;
    taskName.textContent = input.value;

    const editButton = editContainer.parentNode.querySelector('.todo-list__edit-task-button');
    editButton.style.display = 'block';
    editContainer.remove();
    updateStorage(tasks);
}
export default saveTaskName;