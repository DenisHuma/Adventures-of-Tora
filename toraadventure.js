
window.onload = function () {
    let title = document.querySelector("#title");
    let frontpage = document.querySelector("#frontpage");
    let startbutton = document.querySelector("#startbutton");
    let maindiv = document.querySelector("#maindiv");
    startbutton.addEventListener("click", function () {
        frontpage.style.display = 'none';
        let grass = document.createElement('div');
        grass.classList.add("grass");
        maindiv.appendChild(grass);
        let sky = document.createElement("div");
        sky.classList.add('sky');
        maindiv.appendChild(sky);
        let Tora = document.createElement("div");
        Tora.classList.add('Tora');
        sky.appendChild(Tora);
        let Torahead = document.createElement('div');
        Torahead.classList.add('Torahead');
        Tora.appendChild(Torahead);
        let Toraeye1 = document.createElement('div');
        Toraeye1.classList.add('eye1');
        Tora.appendChild(Toraeye1);
        let Toraeye2 = document.createElement('div');
        Toraeye2.classList.add('eye2');
        Tora.appendChild(Toraeye2);
        let Toranose = document.createElement('div');
        Toranose.classList.add('toranose');
        Tora.appendChild(Toranose);
        let leftear = document.createElement('div');
        leftear.classList.add('leftear');
        Tora.appendChild(leftear);
        let rightear = document.createElement('div');
        rightear.classList.add('rightear');
        Tora.appendChild(rightear);
        let tail = document.createElement('div');
        tail.classList.add('tail');
        Tora.appendChild(tail);
        let chatbox = document.createElement('div');
        chatbox.classList.add('chatbox1');
        Tora.appendChild(chatbox);
        let textchat1 = document.createElement('p');
        textchat1.classList.add('chat1');
        chatbox.appendChild(textchat1);
        textchat1.innerHTML = 'Hello, there, I am Tora! Welcome to my adventures.. Please press MEOW'
    })
    
}