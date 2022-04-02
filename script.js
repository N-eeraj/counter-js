document.addEventListener("DOMContentLoaded", () => {

    const counter = document.getElementsByTagName("span")[0];
    const add = document.getElementById("add");
    const sub = document.getElementById("sub");
    let count = counter.innerText;
    
    add.addEventListener("click", () => counter.innerText = ++count);
    sub.addEventListener("click", () => counter.innerText = --count);

});