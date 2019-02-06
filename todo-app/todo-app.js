// Remove all p tags that have 'do'  in the text

const ps = document.querySelectorAll('p');
ps.forEach((p) => {
    if(p.innerHTML.toLowerCase().includes('DO'.toLowerCase())) {
        p.remove();
    }
})