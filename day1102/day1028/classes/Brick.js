/*벽돌 정의*/

class Brick extends GameObject{
    
    constructor(container, x, y, width, height,velX,velY,color){
        super(container, x, y, width, height,velX,velY,color);
        //벽돌만의 초기화...
        this.div.style.border ="1px solid black";
    }
}