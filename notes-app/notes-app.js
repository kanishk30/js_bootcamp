const notes2 = [{
        title: 'My next trip',
        body: 'Visit Australia',
    },
    {
        title: 'My nickname',
        body: 'Kanu',
    }
];

// const el = document.querySelector('p')
// console.dir(el);
// el.innerText = 'Text changed';

// // Add a new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'New element from JS';
// document.querySelector('body').appendChild(newParagraph);

document.querySelector('button').addEventListener('click', (e) => { console.log(e) })
document.querySelector('#create-btn').textContent = 'Button clicked';
document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
})




// document.querySelector('#remove-btn').addEventListener('click', () => {
//     console.log('Remove ');
//     document.querySelectorAll('.note').forEach((e) => e.remove())
// });
