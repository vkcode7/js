//usage of forEach in action
const ul = document.querySelector('.people');

let people_names = ['mark', 'mario', 'davis', 'salgado'];


let html = ``;
people_names.forEach(function(person){
    html += `<li style="color: purple">${person}</ul>`;
});

ul.innerHTML = html;

let text_2 = document.querySelector('body > div > p:nth-child(1)');
console.log(text_2);

let doc_obj = document.getElementById("t2").innerText;
console.log(doc_obj);
//declaring objects

let content = document.getElementsByClassName("content");
content[0].innerHTML += "<p><h2>This is a CHANGED content<h2><p>";
people_names.forEach( person => {
    content[0].innerHTML += `<p>${person}</p>`;
});

//gettig and seting attributes
let link = document.querySelector("a");
link.setAttribute("href", "www.yahoo.com");
link.innerText = "the yahoo web site";

let loremipsum = document.getElementById("id_1");
//loremipsum.setAttribute("class", "success");
loremipsum.setAttribute('style', 'color:green')

//setting CSS attributes
let title = document.getElementById("id_title");
console.log(title.style);

title.style.margin = '50px';
title.style.color = 'red';
title.style.fontSize = 100;

//adding removing classes
let ptags = document.querySelector("p");
console.log(ptags.classList);

ptags.classList.remove('error');
ptags.classList.add('success');
console.log(ptags.classList);


