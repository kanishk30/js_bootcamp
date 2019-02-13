let notes = [];
const filters = {
    searchText: ''
}

// Check for exsiting saved data 
const notesJSON = localStorage.getItem('notes');

if (notesJSON!== null) {
    notes =  JSON.parse(notesJSON);
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const el = document.createElement('p');
        el.textContent = note.title.length ? '' : 'unnamed note';
        
        document.querySelector('#notes').appendChild(el)
    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    notes.push({
        title: '',
        text: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
})

