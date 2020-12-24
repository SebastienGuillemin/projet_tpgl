import { Materiel } from "../materiel.model";

export class Ventillation extends Materiel {
    etats = ["Allumée", "Éteinte"];
    labels = ["Éteindre", "Allumer"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Ventillation");
    }
}
