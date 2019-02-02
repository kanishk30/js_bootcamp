const todos = ['Yoga', 'Learn', 'Work', 'Exercise', 'Relax'];
console.log(`I have ${todos.length} todos`);
for (const todo of todos) {
    console.log(`Todo:`, todo);
} 

for ( let i=0; i<todos.length; i++ ) {
    console.log(todos[i]);
}
/*
    I have 5 todos
    Todo 1: Yoga
    Todo 2: Learn
    Todo 3: Work
    Todo 4: Exercise
    Todo 5: Relax
*/
todos.forEach((todo, index) => {
    console.log(`Todo ${index+1}: ${todo}`)
})

console.log(todos.indexOf('Learn')); // 1

const todos2 = ['Yoga', 'Learn', 'Work', 'Learn', 'Exercise', 'Relax'];

console.log(todos2.lastIndexOf('Learn')); // 3
console.log(todos2.lastIndexOf('learn')); // -1
