import mainImage from './images/right.png';

import * as PIXI from 'pixi.js' 
import framework from './modules/framework'

const app = new PIXI.Application({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    backgroundColor: 0x1099bb,
    resolution: window.devicePixelRatio || 1,
    view: document.getElementById("main") as HTMLCanvasElement,
    antialias: true
});
console.log( "width", document.documentElement.clientWidth);
console.log(window.devicePixelRatio);
window.onresize = ()=>{
    app.view.width = document.documentElement.clientWidth;
    app.view.height = document.documentElement.clientHeight;
    //app.resize();
}
let f = new framework({
    app
});

const sprite = PIXI.Sprite.from(mainImage);
sprite.interactive = true;
app.stage.addChild(sprite);
sprite.on("pointerdown",()=>{
    console.log("ckd",app.stage);
})
app.stage.interactive = true;
app.stage.on("pointerdown",()=>{
    console.log("ckd-g");
})

app.stage.addChild(f);
f.setController();


// const container = new PIXI.Container();

// app.stage.addChild(container);

// // Create a new texture
// const texture = PIXI.Texture.from(mainImage);

// // Create a 5x5 grid of bunnies
// for (let i = 0; i < 25; i++) {
//     const bunny = new PIXI.Sprite(texture);
//     bunny.anchor.set(0.5);
//     bunny.x = (i % 5) * 40;
//     bunny.y = Math.floor(i / 5) * 40;
//     container.addChild(bunny);
// }

// // Move container to the center
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;

// // Center bunny sprite in local container coordinates
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;

// // Listen for animate update
// app.ticker.add((delta) => {
//     // rotate the container!
//     // use delta to create frame-independent transform
//     container.rotation -= 0.01 * delta;
// });