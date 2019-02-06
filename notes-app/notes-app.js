const notes2 = [{
        title: 'My next trip',
        body: 'Visit Australia',
    },
    {
        title: 'My nickname',
        body: 'Kanu',
    }
];

const el = document.querySelector('p')
console.dir(el);
el.innerText = 'Text changed';

// Add a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New element from JS';
document.querySelector('body').appendChild(newParagraph);
