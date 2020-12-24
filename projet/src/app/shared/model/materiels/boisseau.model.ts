import { Materiel } from "../materiel.model";

export class Boisseau  extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Boisseau");
    }

    executerOrdre(): void {
        alert("Boisseau");
    }

    getActionLabel(): string {
        return "Boisseau";
    }
}
