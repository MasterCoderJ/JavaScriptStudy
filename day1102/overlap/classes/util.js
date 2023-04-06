function collisionCheck(me, you, gap){

    //북서쪽 : box1의 (x축+width)가 box2의 x축을 넘어서고,  box1의y축+height 가 box2의 y축을 넘어설때 
    let result1 = (me.x+me.width+gap >= you.x) && (me.y+me.height+gap >= you.y);

    //북동쪽 : box1의 x축이 box2의x축+width 보다 작아지며, box1의 y축+ height가 box2의 y축보다 커질때
    let result2 = (me.x-gap <= you.x + you.width) && (me.y+me.height+gap >=you.y);

    //서남쪽 : box1의 x축+width가  box2의 x축을 넘어서고, box1의 y축이  box2의 y축+height보다 작아질때
    let result3 = (me.x+me.width+gap >=you.x) && (me.y-gap <= you.y+you.height)

    //동남쪽: box1의 x축이 box2의 x+width보다 작아지고, box1의 y축이  box2의 y축+height보다 작아질때
    let result4 = (me.x-gap <=you.x+you.width) && (me.y-gap<=you.y+you.height);

    return (result1 && result2 && result3 && result4)

}

function getRandomByRange(min, max){
    return min+ parseInt(Math.random()*(max-min+1));
}