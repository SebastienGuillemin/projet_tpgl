import { Materiel } from "../materiel.model";

export class ElevateurGodet extends Materiel {
    etats = ["En marche", "Arret"];
    labels = ["Arrêter", "Actionner"];

    constructor(nom?: string, etat?: string) {
        super(nom, etat, "ElevateurGodet");
    }
}
