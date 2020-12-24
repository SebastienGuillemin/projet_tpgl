import { Materiel } from "../materiel.model";

export class Silo extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Silo");
    }

    executerOrdre(): void {
        alert("Silo vidé");
    }

    getActionLabel(): string {
        return "Vider";
    }
}
