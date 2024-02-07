const ul = document.querySelector("ul");
const inp = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", btnResponse);

function btnResponse(){
    const currInpVal = inp.value;
    inp.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn2 = document.createElement("button");
    li.appendChild(span);
    li.appendChild(btn2);
    span.textContent = currInpVal;
    btn2.textContent ='Delete';
    ul.appendChild(li);
    btn2.addEventListener("click", () =>{
        ul.removeChild(li);
    });

    inp.focus();
}