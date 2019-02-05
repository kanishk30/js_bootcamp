const todos = ['Yoga', 'Learn', 'Work', 'Exercise', 'Relax'];
// 1. Convert array to array of objects -> text, completed ( boolean )
// 2. Create function to remove a todo by text value
const status = [true, true, true, false, false];
let _todos = [];
todos.forEach((todo, index) => {
    let todosObj = {};
    todosObj[`text`] = todo;
    todosObj[`completed`] = status[index];
    _todos.push(todosObj);
});
console.log(_todos);
let deleteTodo1 = (arr, element) => {
    const idx = arr.findIndex((obj) => {
        return obj.text.toLowerCase() === element.toLowerCase();
    })
    // Mandatory if clause as if index is -1, then it will start splicing the array from end
    if (idx > -1) {
        arr.splice(idx, 1); // delete till 1st element after index
    }
}
// Alternative way

let deleteTodo2 = (arr, element) => {
    arr.forEach((obj, index)=> {
        if (obj.text.toLowerCase() == element.toLowerCase()) {
            arr.splice(index,1); 
        }
    });
}

deleteTodo1(_todos, 'work');
deleteTodo1(_todos, '!!work'); // doing nothing
deleteTodo2(_todos, 'learn');
deleteTodo2(_todos, '!learn'); // doing nothing
console.log(_todos);
