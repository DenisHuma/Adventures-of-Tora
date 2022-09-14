
window.onload = function () {
    let title = document.querySelector("#title");
    let frontpage = document.querySelector("#frontpage");
    let startbutton = document.querySelector("#startbutton");
    let maindiv = document.querySelector("#maindiv");
    startbutton.addEventListener("click", function () {
        frontpage.style.display = 'none';
        let newdiv = document.createElement('button');
        newdiv.classList.add("button-design");
        maindiv.appendChild(newdiv);
    })
    
}