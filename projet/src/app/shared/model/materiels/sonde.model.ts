import { Materiel } from "../materiel.model";

export class Sonde extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Sonde");
    }

    executerOrdre(): void {
        alert("Sonde");
    }
    getActionLabel(): string {
        return "Sonder";
    }
}
