import { Materiel } from "../materiel.model";

export class Alarme extends Materiel {
    etats = ["Éteinte", "Sonne"];
    labels = ["Allumer", "Éteindre"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Alarme");
    }
}
