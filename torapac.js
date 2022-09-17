import TileMap from './torapacmap.js';
let tileSize = 60;
//const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
let x=0;
let Tora = document.querySelector('.Tora');
let chatbox1 = document.querySelector(".chatbox1");
function gameLoop(){
    tileMap.draw();
    console.log(tileMap.map[1][2]);
    if(indexrow==11 && indexcolumn==13){
        
        clearInterval(hop);
        Tora.style.display = 'block';
        Tora.style.left = '80%';
        chatbox1.innerHTML = 'Congratulations! We won, now we are ready for the next game. Come on!';
        chatbox1.style.display = 'block';
        let congrats = setInterval(comeup, 100);
        function comeup(){
            x++;
            Tora.style.bottom = `${x}rem`;
            chatbox1.style.bottom = `${x/2}rem`;
            if(x <= 13){
                clearInterval(congrats);
            }
        }
    }
}

let indexrow = 1;
let indexcolumn = 1;

document.addEventListener('keydown',keycheck);

function keycheck(key){
    if(key.keyCode == 39 && tileMap.map[indexrow][indexcolumn+1]==0){
        tileMap.map[indexrow][indexcolumn] = 0;
        tileMap.map[indexrow][indexcolumn+1]=2;
        indexcolumn++;
    }
    else if(key.keyCode == 37 && tileMap.map[indexrow][indexcolumn-1]==0){
        tileMap.map[indexrow][indexcolumn] = 0;
        tileMap.map[indexrow][indexcolumn-1]=2;
        indexcolumn--;
    }
    else if(key.keyCode == 40 && tileMap.map[indexrow+1][indexcolumn]==0){
        tileMap.map[indexrow][indexcolumn] = 0;
        tileMap.map[indexrow+1][indexcolumn]=2;
        indexrow++;
    }
    else if(key.keyCode == 38 && tileMap.map[indexrow-1][indexcolumn]==0){
        tileMap.map[indexrow][indexcolumn] = 0;
        tileMap.map[indexrow-1][indexcolumn]=2;
        indexrow--;
    }
}


tileMap.setCanvasSize(canvas);
let hop = setInterval(gameLoop, 1000/75);

