import { Materiel } from "../materiel.model";

export class Ventillation extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Ventillation");
    }

    executerOrdre(): void {
        alert("Venillation");
    }
    getActionLabel(): string {
        return "Actionner";
    }
}
