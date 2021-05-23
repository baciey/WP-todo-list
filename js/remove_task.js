import renderTasks from './render_tasks.js';

function removeTask(e, tasks) {
    const parent = e.target.parentNode.parentNode;
    tasks.splice(parent.id, 1);
    // parent.remove();
    renderTasks(tasks);
}

export default removeTask;