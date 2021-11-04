// Print the name of node with id ”content”
var names = document.querySelector('#content')
console.log(names.nodeName);

//Print the name of first node with class name ”basic”
var first_name = document.querySelector('.basic')
console.log(first_name.nodeName);

// Print text content of all li elements.
var all_text = document.querySelectorAll('li')

for(i of all_text){
    console.log(i.textContent);
}

// Print all node names of body descendants
var body = document.querySelector('body')
var allNodes = body.querySelectorAll('*');

for (x of allNodes) {
    console.log(x.nodeName);
}

// Print text content of all p elements that are descendants of article element
var article = document.querySelectorAll('article')
for(a of article.querySelectorAll('p')){
    console.log(a.textContent);
}

// Fill all list items with default text “John Doe”
var items = document.querySelectorAll('li')

for(i of items){
    i.textContent = "John Doe"
}

// Search for all elements that have text content with word “and”. Print the name of those elements and also the text contents
