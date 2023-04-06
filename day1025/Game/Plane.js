//슈팅게임의 주인공을 정의한다

class Plane{
    constructor(container, x, y, width, height , velX, velY){
        this. container = container; // 이 주인공의 div가 붙을 부모요소
        this.x = x;
        this.y = y;
        this.width =width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img = document.createElement("img");
        this.img.src = "../../images/game/hero.png";
        this.img.style.position = "absolute";
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";

        //화면에 부착
        this.container.appendChild(this.img);
    
    }

    //비행기의 속성값을 어떻게 변경할지를 처리하는 메서드 (속성값)
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    //그래픽 처리--> 비행기가 화면에 어떻게 그려질지를 처리하는 메서드 (디자인)
    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";

    }

}