let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        text: ''
    })
    saveNotes(notes);
    // renderNotes(notes, filters);
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
    // e.target.value = ''
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
})

window.addEventListener('storage', (e) => {
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})
