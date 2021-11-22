//Lisätään napin kuuntelijafunktio
let form = document.querySelector("form")
form.addEventListener("submit", addNote)
let body = document.querySelector("body")


function addNote(event){
    event.preventDefault()

    FormData = new FormData(form)
    //Luodaan otsikko johon tulee nimi-kentästä nimi ja lisäksi aikaleima
    let h3 = document.createElement("h3")
    h3.textContent = FormData.get("name") + "  " + new Date().toLocaleString();

    //Itse note lisätään tekstinä p-elementtiin textareasta
    let p = document.createElement("p")
    p.textContent = FormData.get("note")

    console.log(formData.get("important"));

    //Jos checkbox valittu, lisätään important muotoilu
    if(formData.get("important")){
        h3.classList.add("important")
        p.classList.add("important")
    }

    //Kaikki elementit uusina bodyn sisälle
    body.append(h3,p, document.createElement("hr"))

}