import { Point } from "pixi.js";

function getOffset(p1:Point,p2:Point){
    let x = p2.x-p1.x;
    let y = p2.y-p1.y;
    if(Math.abs(x)>Math.abs(y)){ //横矩形 x位移多的情况
        y = y/x;
        x = 1;
    }else{
        x= x/y;
        y =1;
    }
    return {x,y}
}
export {getOffset}