/*주인공을 정의*/

class Hero extends GameObject{

    //상속관계에서 부모가 생성자에 매개변수를 정의할 경우, 자식 클래스에서 반드시 부모의 생성자 호출시 매개변수에 맞는 호출을 해야한다..
    constructor(container, src, x, y, width, height, velX, velY){ 
        super(container, src, x, y, width, height, velX, velY); //부모 매개변수
        console.log("난달라");
    }
}
new Hero(stage, "C:/js_workspace/images/gallerxy/ship.png", 450, 650, 35, 35, 0, 0);