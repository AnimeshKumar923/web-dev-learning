const body = document.querySelector("body");
const p1 = document.createElement("p");
p1.textContent = "Hey I’m red!";
p1.style.color = "red";
body.appendChild(p1);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!"
body.appendChild(h3);

const div1 = document.createElement("div");
div1.style.backgroundColor = "pink";
div1.style.borderColor = "black";
div1.style.borderWidth = "80px"
div1.style.border = "solid";
body.appendChild(div1);

const h1 = document.createElement("div");
h1.textContent = "I’m in a div";
div1.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div1.appendChild(p2);