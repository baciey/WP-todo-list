import renderTasks from './render_tasks.js';

function addTask(e, tasks) {
    const input = e.target.parentNode.querySelector('.todo-list__task-name-input');
    const task = {};
    task.name = input.value;
    task.isDone = false;
    tasks.push(task);
    renderTasks(tasks);
    input.value = '';
}

export default addTask;