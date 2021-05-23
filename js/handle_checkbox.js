import updateStorage from './update_storage.js';


function handleCheckbox(e, tasks) {
    const index = e.target.parentNode.parentNode.id;
    if (e.target.checked) {
        tasks[index].isDone = true;
        e.target.parentNode.parentNode.classList.add('todo-list__single-task--done');
    }
    else {
        tasks[index].isDone = false;
        e.target.parentNode.parentNode.classList.remove('todo-list__single-task--done');
    }
    updateStorage(tasks);
}

export default handleCheckbox;