// Read existing saved data from loc al storage

const getSavedNotes = () => {

const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
       return JSON.parse(notesJSON);
    } else {
        return []
    }
}

// Save n otes to local storage

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Generate DOM nodes

const generateNoteDOM = (note) => {
     const el = document.createElement('p');
     el.textContent = note.title.length ? '' : 'unnamed note';

     return el;
}

// Render application notes

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const el = generateNoteDOM(note);

        document.querySelector('#notes').appendChild(el)
    })
}