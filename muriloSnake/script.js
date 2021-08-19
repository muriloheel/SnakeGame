import Food from "./food.js";
import Snake from './snake.js';
import InputHandle from './inputHandle.js'

let canvas = document.querySelector(".game-board")
let ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500
let placeSize = 20
let food = new Food(placeSize,placeSize,canvas.width, canvas.height)
let snake = new Snake(placeSize,canvas.width, canvas.height)

function start(){
    snake.update(ctx)
    snake.draw(ctx)
    if((snake.bodyPartsCoords[snake.bodySize-1].x === food.x) && (snake.bodyPartsCoords[snake.bodySize-1].y === food.y) ){
        snake.bodyPartsCoords.unshift({x:snake.bodyPartsCoords[0].x, y:snake.bodyPartsCoords[0].y})
        food.update()
    }
    food.draw(ctx)
    checkGameOver()
}
setInterval(start,150)
new InputHandle(snake)
//buttons:
document.querySelector(".up").onclick = ()=>{
    if(snake.yVelocity === snake.pieceSize *(-1) ||  snake.yVelocity === snake.pieceSize){
        return
    }
    else{
        snake.yVelocity = snake.pieceSize * (-1)
        snake.xVelocity = 0
    }
}
document.querySelector(".left").onclick = ()=>{
    if(snake.xVelocity === snake.pieceSize *(-1) ||  snake.xVelocity === snake.pieceSize){
        return
    }
    else{
        snake.xVelocity = snake.pieceSize * (-1)
        snake.yVelocity = 0
    }
}
document.querySelector(".down").onclick = ()=>{
    if(snake.yVelocity === snake.pieceSize *(-1) ||  snake.yVelocity === snake.pieceSize){
        return
    }
    else{
        snake.yVelocity = snake.pieceSize
        snake.xVelocity = 0
    }
}
document.querySelector(".right").onclick = ()=>{
    if(snake.xVelocity === snake.pieceSize *(-1) ||  snake.xVelocity === snake.pieceSize){
        return
    }
    else{
        snake.xVelocity = snake.pieceSize
        snake.yVelocity = 0
    }
}
function checkGameOver(){
        if(
            snake.bodyPartsCoords[snake.bodySize-1].x === - placeSize  || 
            snake.bodyPartsCoords[snake.bodySize-1].x === canvas.width ||
            snake.bodyPartsCoords[snake.bodySize-1].y === -placeSize ||
            snake.bodyPartsCoords[snake.bodySize-1].y === canvas.height 
            ){
                snake.update(ctx)
                snake.draw(ctx)
                alert('Você bateu na parede :/')
                restart()
        }
        if(snake.bodyPartsCoords.some(snakeIntersection)){
                alert('você bateu em si próprio!')
                restart()
        }
}
function restart(){
    snake.bodyPartsCoords = [
            {x:40, y:100},
             {x:60, y:100},
             {x:80, y:100},
            {x:100, y:100},
    ]
    snake.xVelocity = placeSize
    snake.yVelocity = 0
    snake.bodySize = snake.bodyPartsCoords.length
    food.update()
    food.draw(ctx)
}
 function snakeIntersection(value){
            if(value.x === snake.bodyPartsCoords[snake.bodySize-1].x  && value.y ===  snake.bodyPartsCoords[snake.bodySize-1].y && snake.bodyPartsCoords.indexOf(snake.bodyPartsCoords[snake.bodySize-1]) != snake.bodyPartsCoords.indexOf(value)){
                return true
            }
            else{
                return false
            }
        }

       
