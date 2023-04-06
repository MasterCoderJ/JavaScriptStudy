class Bullet {

    constructor(container, src, x, y, width, height, velX, velY) {

        this.container = container;
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.img = document.createElement("img");

        //스타일 적용
        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        //부착
        this.container.appendChild(this.img);
    }

    tick() {
        this.x += this.velX;
        this.y += this.velY;
    }

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.removeWithEnemy(); //적군과 총알이 맞는지를 먼저 검사
        this.removeFromScreen();
    }


    removeFromScreen() {
        //총알인 내가 스크린을 넘어서면 제거하자
        if (this.x > screen.width - 400) {
            // 1)화면에서 제거
            this.container.removeChild(this.img); //요소 제거

            // 2)배열에서 제거
            let index = bulletArray.indexOf(this); //bulletArray.indexOf(); 괄호안에 조사대상          
            bulletArray.splice(index, 1);
        }
    }

    removeWithEnemy() {
        //현재 존재하는 적군수만큼 반복하면서 닿았는지 판단하자
        for (let i = 0; i < enemyArray.length; i++) {

            let result = collisionCheck(this, enemyArray[i]);

            if (result) { //충돌했다면 1)화면에서 제거(총알,적군) 

                this.container.removeChild(this.img);
                this.container.removeChild(enemyArray[i].img);

                // 2)배열에서 제거(총알,적군)

                let index = bulletArray.indexOf(this); //총알인 내가 어디에 들어있는지
                bulletArray.splice(index, 1);

                index = enemyArray.indexOf(enemyArray[i]); //적군이 어디에 들어있는지
                enemyArray.splice(index, 1);
            }


        }
    }


}