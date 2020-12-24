import { Materiel } from "../materiel.model";

export class Silo extends Materiel {
    etats = ["Vide", "Plein"];
    labels = ["Remplir", "Vider"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Silo");
    }
}