let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        text: '',
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf(),
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
   filters.sortBy = e.target.value;
   renderNotes(notes, filters);
})

window.addEventListener('storage', (e) => {
    if (e.key == 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})

// console.log(new Date().toString())
// console.log(+new Date().getFullYear());
// console.log(new Date(+new Date()));
// console.log(new Date().getTime());

const date1 = new Date('Feb 20 2002');
const date2 = new Date('Mar 21 2002');


// Both same thing
// const ts1 = date1.getTime();

// const ts1A = +date1

const birthday = moment().year(1995).month(3).date(30).format('DD MMM YYYY');
console.log(birthday, 'bday');
