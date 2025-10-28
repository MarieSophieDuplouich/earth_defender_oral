// Créer un GameObject
// En POO tout doit être une classe. Chaque classe a sa propre responsabilité. Game s'occupe de l'affichage correct du jeu et de ses éléments. La classe GameObject quant à elle s'occupe d'un GameObject : sa position, son image, sa vie.
import { Assets } from "../Classes/Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject(game) {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getPlayerImage();
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start();
    }
    // Getter d'image et de position
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    // Getter d'image et de position
    GameObject.prototype.getPlayer = function () {
        return this.image;
    };
    // Et ajoutez un getter public pour que les GameObjects puissent accéder au Game. j'ai compris qu'il falalit mettre getGame dans ce fichier pas dans 
    //Game.ts
    GameObject.prototype.getGame = function () {
        return this.game;
    };
    GameObject.prototype.setImage = function (image) {
        this.image = image;
    };
    GameObject.prototype.setPosition = function (position) {
        this.position = position;
    };
    GameObject.prototype.start = function () {
    };
    GameObject.prototype.update = function () {
    };
    return GameObject;
}());
export { GameObject };
// Effectuer une action à chaque frame
// Nous voulons donner au Player la liberté de mettre à jour sa position à chaque frame du jeu.
// Pour cela, nous allons, comme pour GameObject.start(), créer une méthode protected nommée GameObject.update() qui sera appelée à chaque frame dans le setInterval().
// Dans GameObject.ts
// protected update(){}
// Il faut appeler cette méthode dans le setInterval de la méthode Game.loop(). La méthode GameObject.update() étant protected, il nous faut ajouter une méthode publique pour y accéder depuis Game.
// Laissez la méthode start vide, car ce sera à une classe fille comme Player, Alien ou Laser de la remplir avec les actions qu'elles voudront effectuer.
// Dans le cas de Player, il veut définir sa propre image et sa position en bas au centre de l'écran.
// Implémentez donc la méthode start dans Player.
