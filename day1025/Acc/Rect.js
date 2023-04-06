//사각형을 정의한다: Rect라는 자료형을 정의한다
//container: 이 객체의 div가 붙을 부모요소

class Rect {

    constructor(container, bg, x, y, width, height) {
        this.height = height;
        this.width = width;
        this.container = container;
        this.bg = bg; //클래스의 인서턴스 변수에 보관
        this.x = x;
        this.y = y;
        this.div = document.createElement("div");
        this.div.style.width = 100 + "px";
        this.div.style.height = 100 + "px";
        this.div.style.background = this.bg;
        this.div.innerText = "x:" + this.x + " \n y:" + this.y;
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        //화면에 부착
        this.container.appendChild(this.div);
    }

    //x,y값 등을 변경한다고 하여, 시각적으로 자동으로 바뀌는것은 없다, 즉 사용자가 그래픽적으로 바뀐 모습을 보려면, 변경된 xy를 반영한 left, top을 호출 해야한다
    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        //충돌여부 판단 res1 = 북서쪽 res2= 남서, res3= 북동 res4= 남동

        let result1 = (this.y + this.height >= rect2.y) && (this.x + this.width >= rect2.x);

        let result2 = (this.x + this.width >= rect2.x) && (this.y <= rect2.y + rect2.height);

        let result3 = (this.x <= rect2.x + rect2.width) && (this.y + this.height >= rect2.y);

        let result4 = (this.x <= rect2.x + rect2.width) && (this.y <= rect2.y + rect2.height);

        if (collisionCheck(this,rect2)) {

            this.div.style.background = "red";
        }
        else {
            this.div.style.background = "green";
        }

        //좌표 출력
        this.div.innerText = "x:"+this.x+" \n y:"+this.y;

    }
}