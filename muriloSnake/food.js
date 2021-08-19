
export default class Food{
    constructor(width,height,stageWidth, stageHeight){
           this.stageWidth = stageWidth
           this.stageHeight = stageHeight
            this.width = width
            this.height = height
            this.randomWidth = this.width * (Math.floor(Math.random()*this.stageWidth/this.width)) 
            this.randomHeight = this.height * (Math.floor(Math.random()*this.stageHeight/this.height)) 
            this.x = this.randomWidth
            this.y = this.randomHeight 
    }
    draw(ctx){
            ctx.fillStyle = "red";
            ctx.fillRect(this.randomWidth, this.randomHeight, this.width, this.height); 
    }
    update(){
        this.randomWidth  = this.width * (Math.floor(Math.random()*this.stageWidth/this.width)) 
        this.randomHeight = this.height * (Math.floor(Math.random()*this.stageHeight/this.height)) 
        this.x = this.randomWidth
        this.y = this.randomHeight 
    }
}