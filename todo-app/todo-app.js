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

let _todo = todos.filter((todo) => {
    return !todo.status;
});
const summary = document.createElement('h2');
summary.textContent = `You have ${_todo.length} todo left`;
document.querySelector('body').appendChild(summary);

todos.forEach((todo)=> {
    const newTodo = document.createElement('p');
    newTodo.textContent = todo.text;
    document.querySelector('body').appendChild(newTodo);
})

document.querySelector('button').addEventListener('click', (e) => {
    e.target.textContent = 'I am Clicked'
})