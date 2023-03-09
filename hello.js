// form
/* 
Form seç
Input bilgisini UL içerisine ekle
Eğer forma bilgi girilemezse kullanıcıyı uyar
*/

let notes = document.querySelector("#userForm")
notes.addEventListener('submit', noteHandler)
console.log(notes)

function noteHandler(event) {
    event.preventDefault()
    let userNote = document.querySelector("#Textarea1")
    console.log(userNote.value)
    if (userNote.value) {
        addNote(userNote.value)
    }
    console.log("Not alindi!")
}

let userNoteListDom = document.querySelector("#userNote")

const addNote = (noteValue) => {
    let liDOM = document.createElement("li")
    let deleteDOM = document.createElement("button")
    deleteDOM.setAttribute("type", "delete")
    deleteDOM.innerText = "Delete"
    deleteDOM.classList.add("btn", "btn-danger")
    liDOM.innerHTML = `${noteValue}`
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    liDOM.appendChild(deleteDOM)
    liDOM.addEventListener("click", () => {
        liDOM.remove()
    })
    userNoteListDom.append(liDOM)
    console.log(liDOM)
}
