import { Materiel } from "../materiel.model";

export class Sonde extends Materiel {
    etats = ["Allumée", "Éteinte"];
    labels = ["Éteindre", "Sonder"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Sonde");
    }
}
