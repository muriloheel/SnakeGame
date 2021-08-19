export default class InputHandle{
    constructor(snake){
            document.addEventListener('keydown', event=>{
                //alert(event.keyCode)
                    switch(event.keyCode){
                        case 38: 
                            snake.moveUp()
                        break;

                        case 40:
                            snake.moveDown()
                        break;
                        
                        case 37:
                            snake.moveLeft()
                        break;
                        
                        case 39:
                            snake.moveRight()
                        break;    
                    }
            })
    }


}