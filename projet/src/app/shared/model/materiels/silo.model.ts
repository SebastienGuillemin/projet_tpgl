import { Materiel } from "../materiel.model";

export class Silo extends Materiel {
    executerOrdre(): void {
        alert("Silo vidé");
    }

    getActionLabel(): string {
        return "Vider";
    }
}
