class Enemy {
    constructor(container, x, y, width, height, velX, velY, src) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.src = src;

        this.img = document.createElement("img");
        this.img.style.position = "absolute";
        this.img.style.left=this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width +"px";
        this.img.style.height= this.height + "px";
        this.img.src = this.src;

        this.container.appendChild(this.img);
    }

    //물리량 변화
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }

    //화면 그래픽 처리(랜더링)
    render(){
        this.img.style.left=this.x + "px";
        this.img.style.top = this.y + "px";
    }
}