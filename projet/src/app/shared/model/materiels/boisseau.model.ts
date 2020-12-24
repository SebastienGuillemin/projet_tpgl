import { Materiel } from "../materiel.model";

export class Boisseau  extends Materiel {
    constructor(nom?: string, etat?: string) {
        super(nom, etat, "Boisseau");
    }

    action(): void {
        if (this.etat == "Plein")
            this.etat = "Vide";
        else this.etat = "Plein";
    }

    getActionLabel(): string {
        if (this.etat == "Plein")
            return "Vider";
        else return "Remplir";
    }
}
