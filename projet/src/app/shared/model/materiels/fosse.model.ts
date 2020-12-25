import { Materiel } from "../materiel.model";

export class Fosse extends Materiel {
    etats = ["Pleine", "Vide"];
    labels = ["Vider", "Remplir"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Fosse");
    }
}
