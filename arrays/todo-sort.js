const todos = ['Yoga', 'Learn', 'Work', 'Relax', 'Exercise'];
//1. Convert array to array of objects -> text, completed ( boolean )
const status = [true, false, true, false, false];
const _todos = [];
todos.forEach((todo, index) => {
    let todosObj = {};
    todosObj['text'] = todo;
    todosObj['status'] = status[index];
    _todos.push(todosObj);
});
// Sort as completed=true at bottom

let sortedTodo = ((arr) => {
    arr.sort((a,b) => {
        return !a.status && b.status ? -1 : 1 
    })
})

sortedTodo(_todos);
console.log(_todos);