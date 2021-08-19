export default class Snake{
    constructor(pieceSize,stageWidth, stageHeight){ 
        this.stageWidth = stageWidth
        this.stageHeight = stageHeight

        this.pieceSize = pieceSize
        this.xVelocity = this.pieceSize
        this.yVelocity = 0
        this.bodyPartsCoords = [
            {x:40, y:100},
            {x:60, y:100},
            {x:80, y:100},
           {x:100, y:100},   
        ]
        this.bodySize = this.bodyPartsCoords.length

    }

    draw(ctx){
        for(let i =0; i < this.bodySize; i++){
            ctx.fillStyle = "purple"
            ctx.fillRect(this.bodyPartsCoords[i].x, this.bodyPartsCoords[i].y,  this.pieceSize, this.pieceSize)
        }
    }
    update(ctx){
                ctx.clearRect(0,0,this.stageWidth,this.stageHeight)
                this.bodySize = this.bodyPartsCoords.length
                for(let i = 0; i < this.bodySize - 1; i++){

                    this.bodyPartsCoords[i].x = this.bodyPartsCoords[i+1].x
                    this.bodyPartsCoords[i].y = this.bodyPartsCoords[i+1].y
                }
                this.bodyPartsCoords[this.bodySize -1].x += this.xVelocity
                this.bodyPartsCoords[this.bodySize -1].y += this.yVelocity
            }
            moveUp(){
                if(this.yVelocity === this.pieceSize *(-1) ||  this.yVelocity === this.pieceSize){
                    return
                }
                else{
                    this.yVelocity = this.pieceSize * (-1)
                    this.xVelocity = 0
                }
                
                
            }
            moveDown(){
                if(this.yVelocity === this.pieceSize *(-1) ||  this.yVelocity === this.pieceSize ){
                    return
                }
                else{
                    this.yVelocity = this.pieceSize
                    this.xVelocity = 0
                }
                
            }
            moveRight(){
                if(this.xVelocity === this.pieceSize || this.xVelocity === this.pieceSize *(-1)){
                    return
                }
                else{
                    this.yVelocity = 0
                    this.xVelocity = this.pieceSize
                }
            }
            moveLeft(){
                if(this.xVelocity === this.pieceSize || this.xVelocity === this.pieceSize *(-1) ){
                    return
                }
                else{
                    this.yVelocity = 0
                    this.xVelocity = this.pieceSize * (-1)
                }
                
            }
}