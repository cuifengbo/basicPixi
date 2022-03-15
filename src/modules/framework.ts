import * as PIXI from 'pixi.js'

import Scene from './scene/index'
import Controller from './contorl';
import { frameOptions } from '.';

class framework extends PIXI.Container{
    currentSence: Scene;
    c:Controller;
    app:PIXI.Application;
    constructor(o:frameOptions){
        super();
        this.app = o.app;
        this.on("added",this.init);
    }
    init (){
        console.log('frame is added init');
        console.log(this.app.view.height);
        console.log(this.app.view.width);
    }
    setController(){
       // this.addChild(this.c.ui)
        this.c = new Controller(this.app);
    }
}
export default framework;