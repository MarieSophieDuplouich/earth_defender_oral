// const gameName: string = "EarthDefender!";
// console.log(gameName);

import {Game} from "./Classes/Game.js";
//une fois compilé ce sera du javascript

const game = new Game();
game.start();
//on apelle la méthode start() dans Game.js

//Attendre le chargement des images
// Le jeu doit se lancer une fois toutes les images chargées. 
// Il faut donc attendre le chargement de la page avec la fonction window.onload avant de démarrer le jeu.
window.onload = ()=>{
    const game = new Game();
    game.start();
}