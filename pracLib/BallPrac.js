//현실의 사물 중 공을 정의해본다

class Ball {

    constructor(x, y, width, height, color, velX, velY) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.velX = velX; //x축으로의 공의 속도를 결정하는 변수
        this.velY = velY; //y축으로의 공의 속도를 결정하는 변수
        this.x = x;
        this.y = y;
        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = this.color;
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.borderRadius = 50 + "%";
        this.flag = true;
        this.changeArray = ["red", "aqua", "black", "blue", "pink"];




        wrapper.appendChild(this.div);
        this.move();
    }

    //테스트
    getMsg() {
        console.log("나 불렀어?");
    }
    //공의 이동
    move() {
        this.x += this.velX;
        this.y += this.velY;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        //하단의 경계를 넘어서면 y축의 부호변경

        //위 아래의 경계를 넘어서면
        if (this.y + this.height >= parseInt(wrapper.style.height) || this.y <= 0) {
            this.velY = -this.velY;
            let r = getRandom(this.changeArray.length);
            console.log("바꿀색상은 ",this.changeArray[r] );
            this.div.style.background=this.changeArray[r];
        }

        //좌 우 경계를 넘어서면
        if (this.x + this.width >= parseInt(wrapper.style.width) || this.x <= 0) {
            this.velX = -this.velX;
            let r = getRandom(this.changeArray.length);
            console.log("바꿀색상은 ",this.changeArray[r] );
            this.div.style.background=this.changeArray[r];
        }

        setTimeout(() => {
            if (this.flag) {
                this.move();
            }
        }, 10)
    }



}