class Mario extends GameObject {

    constructor(container, color, x, y, width, height, velX, velY) {
        super(container, color, x, y, width, height, velX, velY);
        this.g = 0.35; //중력을 생성
        this.fall = true; //마리오의 상태가 내려가거나, 바닦에 있는 상태
    }

    //부모객체에게 물려받은 메서드가, 현 시점에서는 별 도움이 안되거나 상황이 변경되어 코드를 수정할 필요가 있을떄,부모의 메서드와 완전히 똑같은 메서드명을 재정의 할 수 있는데
    //OOP에서는 이러한 메서드 정의 기법을 가리켜 오버라이딩 이라고 한다

    gravity() {
        this.velY += this.g;
    }

    tick() {
        this.gravity();

        //점프한 마리오의 velY값이 0으로 전환되는 순간부터는 낙하로 간주하여, 다시 if문을 정상화
        //낙하로 간주하여, 다시 if문을 정상화시켜놓자(발이 바닥에 닿으면 고정되게)
        if(this.velY>=0){
            this.fall=true;
        }
        
        //벽돌과의 충돌 체크
        for (let i = 0; i < brickArray.length; i++) {
            for (let a = 0; a < brickArray[i].length; a++) {
                let result =  collisionCheck(this, brickArray[i][a]);
                
                if(result && this.fall){ //벽돌에 닿으면 속도 중지                    
                    this.velY=0; 
                    //마리오의 키만큼 위로 올리자
                    this.y = brickArray[i][a].y-this.height;
                }
            }
        }
        this.x += this.velX;
        this.y += this.velY;
    }
}