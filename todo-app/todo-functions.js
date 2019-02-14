const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON!== null) {
        return JSON.parse(todosJSON);
    } else {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const renderTodos = ((todos, filters) => {

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
    //    generateTodoDOM()
        document.querySelector('#parent-div').appendChild(generateTodoDOM(todo));
    })
    // If required -> localStorage.removeItem('todos')
})

const generateTodoDOM = (todo) => {
     const newTodo = document.createElement('p');
     newTodo.textContent = todo.text;
     return newTodo;
} 

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todo left`;
    return summary;
}

