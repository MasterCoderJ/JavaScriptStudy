class Brick extends GameObject{
    constructor(container, color, x, y, width, height, velX, velY){
        super(container, color, x, y, width, height, velX, velY);

        this.div.style.border="2px solid black";
    }
}