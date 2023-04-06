class Clock{
    constructor(container, x, y, height, width, time, min, sec){
        this.container =container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.time=time;
        this.min=min;
        this.sec=sec;
        this.div=document.createElement("div");

        this.div.style.position="absiolute";
        this.div.style.left=this.x+"px";
        this.div.style.top = this.y+"px";
        this.div.style.width = this.width+"px";
        this.div.style.top = this.height+"px";

        this.container.appendChild(this.div);       

    }

}