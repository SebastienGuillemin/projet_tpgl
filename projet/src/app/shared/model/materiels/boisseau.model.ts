import { Materiel } from "../materiel.model";

export class Boisseau  extends Materiel {
    etats = ["Plein", "Vide"];
    labels = ["Vider", "Remplir"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Boisseau");
    }
}
