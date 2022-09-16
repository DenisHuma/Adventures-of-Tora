//OOP

//functions
function firstpage(){
    frontpage.style.display = 'none';
    let grass = document.createElement('div');
    grass.classList.add("grass");
    maindiv.appendChild(grass);
    let sky = document.createElement("div");
    sky.classList.add('sky');
    maindiv.appendChild(sky);
    let Tora = document.createElement('img');
    Tora.classList.add('Tora');
    Tora.src = "imgsrc/tora1.png";
    sky.appendChild(Tora);
    let chatbox = document.createElement('div');
    chatbox.classList.add('chatbox1');
    grass.appendChild(chatbox);
    let textchat1 = document.createElement('p');
    textchat1.classList.add('chat1');
    chatbox.appendChild(textchat1);
    textchat1.innerHTML = 'Hello, there, I am Tora! I hope you are ready to be a part of my adventures. We are going to play some games in order to get back home to my parents. They will put their fate in your skills. Whenever you are ready, press MEOW. ';
    let meow = document.createElement('button');
    meow.classList.add('meowbutton');
    chatbox.appendChild(meow);
    meow.innerHTML = 'MEOW';
    meow.addEventListener('click', function(){
        meow.style.display = 'none';
        Tora.style.bottom = '-150%';
        chatbox.style.bottom = '-100%';
        setTimeout(function(){chatbox.style.display = 'none'; Tora.style.display = 'none';}, 2000);
        sky.appendChild(canvas);
    })
}

//main

let canvas = document.createElement('canvas');
canvas.classList.add('canvaspacman');

window.onload = function () {
    let title = document.querySelector("#title");
    let frontpage = document.querySelector("#frontpage");
    let startbutton = document.querySelector("#startbutton");
    let maindiv = document.querySelector("#maindiv");
    startbutton.addEventListener("click", function () {
        firstpage();
    })
    

    
    
}