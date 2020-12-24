import { Materiel } from "../materiel.model";

export class Cellule  extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Cellule");
    }

    action(): void {
        alert("Cellule");
    }

    getActionLabel(): string {
        return "Cellule";
    }
}
