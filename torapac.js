import TileMap from './torapacmap.js';
let tileSize = 60;
//const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
let x=0;
function gameLoop(){
    tileMap.draw();
}
tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000/75);