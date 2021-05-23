import addTask from './add_task.js';
import handleInput from './handle_input.js';

function createLayout(todo, tasks) {
    const navigation = document.createElement('div');
    const list = document.createElement('div');
    const input = document.createElement('input');
    const addButton = document.createElement('button');

    list.classList.add('todo-list__tasks-container');

    input.placeholder = "task name";
    input.classList.add('todo-list__task-name-input');
    input.addEventListener('focus', (e) => handleInput(e, addTask, tasks));

    addButton.addEventListener('click', (e) => addTask(e, tasks));
    addButton.classList.add('todo-list__add-task-button', 'todo-list__button');
    addButton.title = 'add task';

    navigation.classList.add('todo-list__navigation');
    navigation.appendChild(input);
    navigation.appendChild(addButton);

    todo.appendChild(navigation);
    todo.appendChild(list);
}

export default createLayout;