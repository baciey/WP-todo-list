import createLayout from './create_layout.js';
import renderTasks from './render_tasks.js';


const todo = document.querySelector('.todo-list');

if (todo) {
    const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
    if (localStorageTasks) {
        createLayout(todo, localStorageTasks);
        renderTasks(localStorageTasks);
    } else {
        createLayout(todo, []);
    }
}
