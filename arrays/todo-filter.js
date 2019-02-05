const todos = ['Yoga', 'Learn', 'Work', 'Exercise', 'Relax'];
//1. Convert array to array of objects -> text, completed ( boolean )
const status = [true, true, true, false, false];

const _todos= [];
todos.forEach((todo, index)=> {
    let todosObj ={};
    todosObj['text'] = todo;
    todosObj['status'] = status[index];
    _todos.push(todosObj);
});

// Filter based on status completed. Remove with completed true.

let res = _todos.filter((todo, index) => {
    return !todo.status;
})

console.log(res); 
/*
[{text: 'Exercise',status: false},
 {text: 'Relax',status: false}]
*/
