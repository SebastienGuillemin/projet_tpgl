import { Materiel } from "../materiel.model";

export class Fosse extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "TourManutention");
    }

    executerOrdre(): void {
        alert("Fosse");
    }
    
    getActionLabel(): string {
        return "Vider";
    }
}
