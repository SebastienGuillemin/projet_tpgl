import { Materiel } from "../materiel.model";

export class PontBascule extends Materiel {
    etats = ["Levé", "Baissé"];
    labels = ["Baisser", "Lever"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "PontBascule");
    }
}
