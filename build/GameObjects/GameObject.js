import { Assets } from "../Classes/Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getDefaultImage();
    }
    return GameObject;
}());
export { GameObject };
// Créer un GameObject
// En POO tout doit être une classe. Chaque classe a sa propre responsabilité. Game s'occupe de l'affichage correct du jeu et de ses éléments. La classe GameObject quant à elle s'occupe d'un GameObject : sa position, son image, sa vie.
// Dans un dossier /src/Classes/GameObjects créez un fichier nommé GameObject.ts
// src/Classes/GameObjects/GameObject.ts
// Ajoutez ensuite une position à notre GameObject.
// /src/Classes/GameObjects/GameObject.ts
// En POO la chose la plus importante est l'encapsulation. 
// Les attributs d'une classe sont privés et pourront éventuellement être modifiés via des méthodes publiques getter et setter.
// Affichage du GameObject
// Pour afficher le GameObject, je veux ajouter une méthode draw à la classe Game qui utilise la méthode context.drawImage().
// J'ai besoin d'une image et de la position du GameObject pour dessiner un GameObject dans le canvas. 
// Seulement ces données sont privées. Je vais donc créer des getter dans la classe GameObject.
