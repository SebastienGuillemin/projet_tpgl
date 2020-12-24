import { Materiel } from "../materiel.model";

export class PontBascule extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "TourManutention");
    }

    executerOrdre(): void {
        alert("Pont");
    }
    getActionLabel(): string {
        return "Pont";
    }
}
