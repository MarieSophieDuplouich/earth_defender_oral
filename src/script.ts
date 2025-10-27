// const gameName: string = "EarthDefender!";
// console.log(gameName);

import {Game} from "./Classes/Game.js";
//une fois compilé ce sera du javascript

const game = new Game();
game.start();
//on apelle la méthode start() dans Game.js


window.onload = ()=>{
    const game = new Game();
    game.start();
}