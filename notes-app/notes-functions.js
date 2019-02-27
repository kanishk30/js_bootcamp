// Read existing saved data from loc al storage

const getSavedNotes = () => {

const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
       return JSON.parse(notesJSON);
    } else {
        return []
    }
}

// Save notes to local storage

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id;
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate DOM nodes

const generateNoteDOM = (note) => {
     const el = document.createElement('div');
     const textEl = document.createElement('a');
     const button = document.createElement('button');
     button.textContent = 'x';
     el.appendChild(button);
     button.addEventListener('click', () => {
        removeNote(note.id);
        renderNotes(notes, filters);
     })

     // Setup note title text
     textEl.textContent = note.title.length ? note.title : 'unnamed note';
     textEl.setAttribute('href', `/edit.html#${note.id}`);

     el.appendChild(textEl);
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