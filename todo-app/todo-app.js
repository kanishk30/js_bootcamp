let todos = [];
// print status : false number of todos left
// Add a p for each todo above

const filters = {
    searchText : '',
    hideCompleted: false
}

const todoDiv = document.createElement('div');
todoDiv.setAttribute('id', 'parent-div');

document.querySelector('body').appendChild(todoDiv);

todos = getSavedTodos();

renderTodos(todos, filters);

document.querySelector('#search-todo').addEventListener('input', (e) => {
    console.log(e.target.value);
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})
renderTodos(todos, filters);

document.querySelector('#todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let newItem = event.target.elements.addTodo.value;
    const obj = {
        text: newItem,
        status: false
    }
    todos.push(obj);
    saveTodos(todos); 
    
    event.target.elements.addTodo.value = '';
    renderTodos(todos, filters);
})

document.querySelector('#check-todo').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters)
})

