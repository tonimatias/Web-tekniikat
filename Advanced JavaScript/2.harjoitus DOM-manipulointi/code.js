// a
let header = document.querySelector('h2')
header.textContent = "Let’s manipulate some DOM again!";

// b
let uusi = document.createElement('hr')
header.parentElement.insertBefore(uusi, header)

// c
let article = document.querySelector("article")
let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
p1.textContent = p2.textContent
p2.textContent = temp

// d
let content = document.getElementById("content");
let ul = document.createElement("ul")
content.appendChild(ul)

for(let i = 1; i < 6; i++) {
    let li = document.createElement("li")
    li.textContent = "Number " + i;
    ul.appendChild(li)
}