import * as PIXI from 'pixi.js'
import { Point } from 'pixi.js';
import {getOffset} from '../../utils/math'
import { EventEmitter } from 'events';
class Controller extends EventEmitter {
    status:0;//控制器状态。角度
    activedButton :[];
    ui:PIXI.Container;
    _originPosition:Point;
    _activePosition:Point;
    constructor(app:any) {
        super();
        console.log("im con",app);
        console.log("构建");
        //加载控制层ui
       // this.ui = new PIXI.Container();
      
       app.stage.on("pointerdown",(e: any)=>{
        console.log("down",e);
        })

        
        const basicBoard = new PIXI.Graphics();

        // Rectangle
        basicBoard.beginFill(0xDE3249);
        basicBoard.drawRect(0, 0, document.documentElement.clientWidth/4, document.documentElement.clientHeight/2);
        basicBoard.endFill();
        basicBoard.alpha = 0;
        basicBoard.interactive = true;
        basicBoard.on("pointerdown",(e:any)=>{
            console.log("gdong",e.data.global);
            this._originPosition = JSON.parse(JSON.stringify(e.data.global));
        })
        basicBoard.on("pointermove",(e:any)=>{
           console.log("get:",getOffset(this._originPosition,e.data.global)) 
            //console.log("moving",e.data.global);
        })
        app.stage.addChild(basicBoard);
    }
}
const defaultPad = ['a','b','x','y']
export default Controller