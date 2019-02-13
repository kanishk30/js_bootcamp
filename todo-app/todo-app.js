const todos = [{
        text: 'Yoga',
        status: true
    },
    {
        text: 'Learn',
        status: false
    },
    {
        text: 'Work',
        status: true
    },
    {
        text: 'Exercise',
        status: false
    },
    {
        text: 'Relax',
        status: false
    }
]
// print status : false number of todos left
// Add a p for each todo above

const filters = {
    searchText : '',
    hideCompleted: false
}

const todoDiv = document.createElement('div');
todoDiv.setAttribute('id', 'parent-div');

document.querySelector('body').appendChild(todoDiv);

const renderTodos = ((todos, filters) => {
    
    const filteredTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && (!todo.status || !filters.hideCompleted) 
    })

    let incompleteTodos = filteredTodo.filter((todo) => {
        return !todo.status;
    });

    document.querySelector('#parent-div').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todo left`;
    document.querySelector('#parent-div').appendChild(summary);
    console.log(filteredTodo);
    
    filteredTodo.forEach((todo) => {
        const newTodo = document.createElement('p');
        newTodo.textContent = todo.text;
        // if (!todo.status && todo.text.includes(filter.searchText)) {
        document.querySelector('#parent-div').appendChild(newTodo);
        // }
    })
})

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
    event.target.elements.addTodo.value = '';
    renderTodos(todos, filters);
})

document.querySelector('#check-todo').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters)
})

