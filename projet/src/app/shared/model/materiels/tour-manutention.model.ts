import { Materiel } from "../materiel.model";

export class TourManutention extends Materiel {
    etats = ["Allumee", "Éteinte"];
    labels = ["Eteindre", "Allumer"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "TourManutention");
    }
}
