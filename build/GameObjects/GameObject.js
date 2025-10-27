// Créer un GameObject
// En POO tout doit être une classe. Chaque classe a sa propre responsabilité. Game s'occupe de l'affichage correct du jeu et de ses éléments. La classe GameObject quant à elle s'occupe d'un GameObject : sa position, son image, sa vie.
import { Assets } from "../Classes/Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getDefaultImage();
    }
    // Getter d'image et de position
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    return GameObject;
}());
export { GameObject };
