'use strict'
// fetch from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    try {
        return todosJSON ? JSON.parse(todosJSON) : [] 
    } catch(e) {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const renderTodos = (todos, filters) => {

    const filteredTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && (!todo.status || !filters.hideCompleted)
    })

    let incompleteTodos = filteredTodo.filter((todo) => {
        return !todo.status;
    });

    document.querySelector('#parent-div').innerHTML = '';
    document.querySelector('#parent-div').appendChild(generateSummaryDOM(incompleteTodos));
    
    console.log(filteredTodo);

    filteredTodo.forEach((todo) => {
        document.querySelector('#parent-div').appendChild(generateTodoDOM(todo));
    })
    // If required -> localStorage.removeItem('todos')
}

const removeTodo = (id) => {
    const index =  todos.findIndex((todo) => {
        return id == todo.id;
    })
    if (index > -1) {
    todos.splice(index, 1);
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.status = !todo.status;
    }
}

const generateTodoDOM = (todo) => {
    const el = document.createElement('div');
    const check = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    
    check.setAttribute('type', 'checkbox');
    check.checked = todo.status;
    el.appendChild(check);
    check.addEventListener('change', () => {
        toggleTodo(todo.id);
        saveTodos(todos)
        renderTodos(todos, filters);
    })

    todoText.textContent = todo.text;
    el.appendChild(todoText);

    removeButton.textContent = 'x';
    el.appendChild(removeButton);

    // delete todo
    removeButton.addEventListener('click', (todo) => {
        removeTodo(todo.id);
        renderTodos(todos, filters);
    } )

    return el;
} 

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todo left`;
    return summary;
}

