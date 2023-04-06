//총알생성
class Bullet {
    constructor(container, x, y, width, height, velX, velY, src) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.src = src; //총알의 이미지를 결정짓는 변수

        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        //화면에 부착
        this.container.appendChild(this.img);
    }

    //총알의 위치 속성변경
    tick() {
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    
    }

    //변경된 속성을 화면에 표현하기 위한 그래픽 처리
    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}