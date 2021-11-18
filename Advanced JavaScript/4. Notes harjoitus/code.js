document.querySelector('button').addEventListener('click', addNote)
let user = document.getElementById('name')
let note = document.getElementById('note')
let body = document.querySelector('body')
let checkbox = document.getElementById('important')


function addNote(){
    let h3 = document.createElement('h3')
    h3.textContent = user.value + " " + new Date().toLocaleDateString();
    let p = document.createElement('p')
    p.textContent = note.value

    if(checkbox.checked){
        h3.classList.add('important')
        p.classList.add('important')
    }

    body.append(h3, p, document.createElement('hr'))
}