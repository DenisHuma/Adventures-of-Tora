export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        this.wall = new Image();
        this.wall.src = '/mazeimg/block.png';
        this.carpet= new Image();
        this.carpet.src = '/mazeimg/carpet.png';
        this.player = new Image();
        this.player.src = '/mazeimg/torahead.png';
    }
    
    map = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,1,1,0,1,0,0,1],
    [1,0,1,0,0,0,0,1,0,1,0,1,0,0,1],
    [1,0,1,0,0,1,0,1,0,1,0,1,1,0,1],
    [1,0,1,1,1,1,0,0,0,1,0,1,0,0,1],
    [1,0,1,0,0,0,0,0,0,1,0,1,0,0,1],
    [1,0,1,0,1,1,1,0,0,0,0,1,1,1,1],
    [1,0,1,0,1,0,0,0,1,1,1,0,0,0,1],
    [1,0,1,1,1,0,1,1,0,0,0,0,1,0,1],
    [1,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]
]

    draw(){
        for(let row = 0; row < this.map.length; row++){
            for(let column = 0; column < this.map[row].length; column++){
                let tile = this.map[row][column];
                if(tile==1){
                    this.#drawWall(ctx,column,row,this.tileSize)
                }
                else if(tile==0){
                    this.#drawCarpet(ctx,column,row,this.tileSize);
                }
                else if(tile==2){
                    this.#drawPlayer(ctx,column,row,this.tileSize);
                }
            }
        }
    }

    #drawWall(ctx,column,row,size){
        ctx.drawImage(this.wall,column*this.tileSize,row*this.tileSize,size,size);
    }
    #drawCarpet(ctx,column,row,size){
        ctx.drawImage(this.carpet,column*this.tileSize,row*this.tileSize,size,size);
    }
    #drawPlayer(ctx,column,row,size){
        ctx.drawImage(this.player,column*this.tileSize,row*this.tileSize,size,size);
    }

    setCanvasSize(canvas){
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    }
}
const ctx = canvas.getContext('2d');