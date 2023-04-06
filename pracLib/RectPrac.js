class Rect{
    
    constructor(container, bg,  x, y, width, height){

        this.container = container;
        this.x= x;
        this.y= y;
        this.width =width;
        this.height = height;
        this.bg = bg;

        this.div = document.createElement("div");
        this.div.style.width = 100+"px";
        this.div.style.height = 100+"px";
        this.div.style.background = this.bg;
        this.div.style.position="absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.innerText = "x:" + this.x + " \n y:" + this.y;

        this.container.appendChild(this.div);

    }

    render(){
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

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