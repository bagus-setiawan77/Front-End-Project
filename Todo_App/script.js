const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = [];

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length > 0) {
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value = '';
    }
}

function updateTodoList(){
    todoListUL.innerHTML = '';
    allTodos.forEach((todo, todoIndex) => {
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}

function createTodoItem(todo, todoIndex){
    const todoId = "todo-" + todoIndex;
    const todoLI = document.createElement('li');
    todoLI.className ='todo';
    todoLI.innerHTML = `
        <input type="checkbox" id="${todoId}">
        <label for="${todoId}" class="custom-checkbox">
            <i class="ri-check-line"></i>
        </label>
        <label for="${todoId}" class="todo-text">
            ${todo}
        </label>
        <button class="delete-button">
            <i class="ri-delete-bin-2-line"></i>
        </button>
    `;
    return todoLI;
}