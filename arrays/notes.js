const notes = ['Note 1', true, 23];

console.log(notes); // [ 'Note 1', true, 23 ]
console.log(notes.length); // 3

notes.pop(); // remove from end
notes.push('Note 2'); // add at the end

notes.shift() // remove from start
notes.unshift('My first note'); // add at start

notes.splice(1, 2, '2nd item'); // starting index 1, delete 2 items and then there only add '2nd item'

console.log(notes);

const notes2 = [{
        title: 'My next trip',
        body: 'Visit Australia',
    },
    {
        title: 'My nickname',
        body: 'Kanu',
    }
];

const index = notes2.findIndex(x => x.title === 'My next trip')

console.log(index); // 0

// to check for empty obj in array

notes2.forEach((value, index) => {
    if( !Object.keys(value).length && value.constructor === Object) 
    console.log('empty object index: ',index);
});

// Alternative way
notes2.forEach((value, index) => {
    if( !Object.entries(value).length && value.constructor === Object) 
    console.log('Alternative empty object index: ',index);
})

// console.log(notes2, 'tyththhht')

// Filter 
const res = notes2.filter((obj) => {
    return obj.title.includes('My ni');
});

console.log('filtered List', res);


