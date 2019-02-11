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
    searchText : ''
}



let incompleteTodos = todos.filter((todo) => {
    return !todo.status;
});
const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todo left`;
document.querySelector('body').appendChild(summary);
const todoDiv = document.createElement('div');
todoDiv.setAttribute('id', 'parent-div');

document.querySelector('body').appendChild(todoDiv);
// todos.forEach((todo)=> {
//     const newTodo = document.createElement('p');
//     newTodo.textContent = todo.text;
//     // if (!todo.status && todo.text.includes(filter.searchText)) {
//         document.querySelector('#parent-div').appendChild(newTodo);
//     // }
// })

// Listening to button click event
document.querySelector('button').addEventListener('click', (e) => {
    e.target.textContent = 'I am Clicked'
})

// Typing on input
document.querySelector('#new-todo-input').addEventListener('input', (e) => {
    console.log(e.target.value);
    // const p = document.querySelector('body').appendChild(document.createElement('p'));
    // p.textContent = e.target.value;
})

const renderTodos = ((todos, filters) => {
    const filteredTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredTodo);
    document.querySelector('#parent-div').innerHTML = '';
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
renderTodos(todos, filters)();

