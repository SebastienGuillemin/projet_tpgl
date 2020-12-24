import { Materiel } from "../materiel.model";

export class TourManutention extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "TourManutention");
    }

    action(): void {
        alert("Tour");
    }
    getActionLabel(): string {
        return "Actionner";
    }
}
